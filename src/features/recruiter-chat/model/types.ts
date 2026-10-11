export type ChatRole = "assistant" | "user";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
}

export interface RecruitChatRequest {
  message: string;
}

export interface RecruitChatResponse {
  answer: string;
}
