// api/dify-chat.ts (ESMテストコード)
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  console.log("!!! api/dify-chat.ts handler function was called !!!");
  console.log("Request method:", req.method);
  console.log("Request query:", req.query);
  // console.log("Request body:", req.body); // 必要であればボディも (POSTの場合)

  return res.status(200).json({ ok: true, method: req.method });
} 