export default function handler(req, res) {
  console.log("!!! api/dify-chat.js (pure JS) handler was called !!!");
  res.status(200).json({ message: "Hello from pure ESM JS on Vercel!" });
}
