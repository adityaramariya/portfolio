import type { RecruitChatRequest, RecruitChatResponse } from "../model/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function sendMessage(
  message: string,
  signal?: AbortSignal,
): Promise<string> {
  if (!API_URL) {
    throw new Error("RecruitChat API URL is not configured.");
  }

  const payload: RecruitChatRequest = { message };

  const response = await fetch(
    `${API_URL.replace(/\/+$/, "")}/api/recruitchat`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal,
    },
  );

  if (!response.ok) {
    if (response.status === 429) {
      throw new Error(
        "RecruitChat is temporarily busy. Please try again later.",
      );
    }

    if (response.status === 503 || response.status === 502) {
      throw new Error(
        "The AI service is temporarily unavailable. Please try again.",
      );
    }

    throw new Error(`Unable to get a response (HTTP ${response.status}).`);
  }

  const data = (await response.json()) as RecruitChatResponse;

  if (typeof data.answer !== "string" || !data.answer.trim()) {
    throw new Error("The AI returned an empty response.");
  }

  return data.answer;
}
