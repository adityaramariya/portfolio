"use client";

import { colors } from "@/shared/styles/design-system/tokens/colors";

import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";

import { sendMessage } from "../api/sendMessage";
import type { ChatMessage } from "../model/types";

const suggestions = [
  "Tell me about your React experience",
  "Explain your most interesting project",
  "What are your core technical skills?",
];

const initialMessage: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi! Curious about Aditya? Don't worry, I won't expose his bugs. Ask me anything… preferably not about production incidents.",
};

export default function RecruitChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [error, setError] = useState("");

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const requestRef = useRef<AbortController | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, isLoading, isOpen]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      requestRef.current?.abort();
    };
  }, []);

  async function handleSubmit(
    event?: FormEvent<HTMLFormElement>,
    suggestedMessage?: string,
  ) {
    event?.preventDefault();

    const question = (suggestedMessage ?? input).trim();

    if (!question || isLoading || question.length > 2000) {
      return;
    }

    setError("");
    setInput("");

    const userMessage: ChatMessage = {
      id: `${Date.now()}-user`,
      role: "user",
      content: question,
    };

    setMessages((previous) => [...previous, userMessage]);
    setIsLoading(true);

    const controller = new AbortController();
    requestRef.current = controller;

    try {
      const answer = await sendMessage(question, controller.signal);

      setMessages((previous) => [
        ...previous,
        {
          id: `${Date.now()}-assistant`,
          role: "assistant",
          content: answer,
        },
      ]);
    } catch (err) {
      if (controller.signal.aborted) return;

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      if (requestRef.current === controller) {
        requestRef.current = null;
        setIsLoading(false);
      }
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  }

  return (
    <div>
      {isOpen && (
        <section
          aria-label="RecruitChat conversation"
          className="mb-4 flex h-[min(560px,calc(100dvh-120px))] w-[min(380px,calc(100vw-0px))] flex-col overflow-hidden border border-slate-200 bg-white/[0.5] shadow-2xl dark:border-slate-700 dark:bg-slate-900"
          style={{
            position: "absolute",
            bottom: "50px",
            right: 0,
            width: "393px",
          }}
        >
          {/* Header */}
          <header
            className={
              "flex items-center justify-between px-4 py-4 bg-primary text-white "
            }
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-white/10 text-xl">
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
                </svg>
              </div>

              <div>
                <h2 className="font-bold uppercase">bugsy</h2>
                <p className="text-xs text-primary-foreground">
                  Aditya's AI portfolio assistant
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close RecruitChat"
              className="px-3 py-2 text-xl hover:bg-white/[0.5]"
            >
              ×
            </button>
          </header>

          {/* Messages */}
          <div
            className="flex-1 space-y-4 overflow-y-auto p-4"
            aria-live="polite"
            aria-relevant="additions text"
          >
            {messages.map((message) => {
              const isUser = message.role === "user";

              return (
                <div
                  key={message.id}
                  className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[88%] whitespace-pre-wrap break-words px-4 py-3 text-sm leading-6 ${
                      isUser
                        ? "bg-primary text-white"
                        : "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div role="status" className="flex justify-start">
                <div className="bg-slate-100 px-4 py-3 text-sm text-slate-500 dark:bg-slate-800 dark:text-slate-300">
                  Thinking…
                </div>
              </div>
            )}

            <div ref={bottomRef} />

            {/* Suggestions */}
            {messages.length === 1 && !isLoading && (
              <div className="space-y-2 px-4 pb-3">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Suggested questions
                </p>

                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => handleSubmit(undefined, suggestion)}
                    className="block w-full border border-slate-200 px-3 py-2 text-left text-xs text-slate-700 transition hover:border-primary hover:bg-primary dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Error */}
          {error && (
            <div
              role="alert"
              className="mx-4 mb-3 bg-red-50 px-3 py-2 text-xs text-red-700 dark:bg-red-950 dark:text-red-200"
            >
              <p>{error}</p>
              <button
                type="button"
                onClick={() => {
                  setError("");
                  inputRef.current?.focus();
                }}
                className="mt-1 font-semibold underline"
              >
                Try again
              </button>
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(event) => handleSubmit(event)}
            className="flex items-center gap-2 border-t border-slate-200 p-3 dark:border-slate-700"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about skills or projects..."
              aria-label="Your question"
              maxLength={2000}
              disabled={isLoading}
              className="min-w-0 flex-1 border border-slate-200 bg-white/[0.5] px-3 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary disabled:opacity-60 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-primary"
            />

            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
              className="flex h-11 w-11 shrink-0 items-center justify-center bg-primary text-white transition hover:bg-primary disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </button>
          </form>
        </section>
      )}

      {/* Floating launcher */}

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close Bugsy chat" : "Chat with Bugsy"}
          aria-expanded={isOpen}
          className="flex items-center gap-3 bg-primary px-4 py-2.5  text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary"
          style={{ width: "180px" }}
        >
          {isOpen ? (
            <span aria-hidden="true">👋</span>
          ) : (
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
            </svg>
          )}

          <span>{isOpen ? "Bugsy out! 👋" : "Chat with Bugsy"}</span>
        </button>
      </div>
    </div>
  );
}
