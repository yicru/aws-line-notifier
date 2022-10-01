import { Env } from "../types/env";
import { LineClient } from "../modules/line/client";

/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
export default async (
  request: Request,
  env: Env,
  ctx: ExecutionContext
): Promise<Response> => {
  const client = new LineClient(env.LINE_CHANNEL_ACCESS_TOKEN);

  try {
    await client.bloadcast({
      type: "text",
      text: "メッセージ",
    });

    return new Response("success");
  } catch (e) {
    return new Response("error");
  }
};
