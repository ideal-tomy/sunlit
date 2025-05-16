import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  console.log("!!! api/dify-chat.ts handler function was called !!!");
  return res.status(200).json({ message: "Hello from ESM TS on Vercel!" });
} 