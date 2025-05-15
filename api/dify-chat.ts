// api/dify-chat.ts (シンプルなテスト用コード)
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method === 'POST') {
    res.status(200).json({ message: 'Hello from Dify Chat API (simple)' });
  } else {
    // GETや他のメソッドの場合
    res.status(405).json({ error: 'Method Not Allowed' });
  }
} 