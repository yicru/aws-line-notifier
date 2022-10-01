import { TextMessage } from "./types";

export class LineClient {
  constructor(private readonly accessToken: string) {}

  bloadcast(message: TextMessage) {
    return fetch("https://api.line.me/v2/bot/message/broadcast", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify({
        messages: [message],
      }),
    });
  }
}
