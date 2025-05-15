import type { IncomingMessage, ServerResponse } from 'http';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  // まずreq.bodyをログ
  console.log("req.body:", req.body);

  let bodyString = '';
  for await (const chunk of req) {
    bodyString += chunk;
  }
  console.log("Received raw body string:", bodyString);

  let parsedBody = req.body;
  if (!parsedBody && bodyString) {
    try {
      parsedBody = JSON.parse(bodyString);
    } catch (e) {
      parsedBody = {};
    }
  }
  console.log("Parsed request body:", parsedBody);

  const { query, conversation_id, inputs } = parsedBody || {};

  if (!query && !conversation_id) {
    res.status(400).json({ error: 'Query is required for new conversations or inputs must be provided.' });
    return;
  }

  const apiKey = process.env.DIFY_API_KEY;

  if (!apiKey) {
    res.status(500).json({ error: 'API key is not configured.' });
    return;
  }

  const difyUrl = 'https://api.dify.ai/v1/chat-messages';

  try {
    const difyResponse = await fetch(difyUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: inputs || {},
        query: query,
        user: 'unique-frontend-user-id',
        response_mode: 'streaming',
        conversation_id: conversation_id || undefined,
      }),
    });

    if (!difyResponse.ok) {
      const errorData = await difyResponse.json().catch(() => ({ message: difyResponse.statusText }));
      console.error('Dify API error:', errorData);
      res.status(difyResponse.status).json({ 
        error: 'Failed to fetch response from Dify.', 
        details: errorData 
      });
      return;
    }

    res.setHeader('Content-Type', 'application/octet-stream'); 
    if (difyResponse.body) {
      const reader = difyResponse.body.getReader();
      const stream = new ReadableStream({
        async start(controller) {
          while (true) {
            const { done, value } = await reader.read();
            if (done) {
              break;
            }
            controller.enqueue(value);
          }
          controller.close();
          reader.releaseLock();
        }
      });
      
      const writableStream = res as any;
      await stream.pipeTo(new WritableStream({
        write(chunk) {
          writableStream.write(chunk);
        },
        close() {
          writableStream.end();
        },
        abort(err) {
          console.error("Stream aborted:", err);
          writableStream.end();
        }
      }));

    } else {
      res.status(500).json({ error: 'Dify response body is null.' });
    }

  } catch (error) {
    console.error('Error in dify-chat handler:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
} 