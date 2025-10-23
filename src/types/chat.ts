export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  id?: string;
}

export interface ChatStreamOptions {
  endpoint: string;
  messages: ChatMessage[];
  apiId: string;
  onUpdate: (content: string) => void;
  onComplete: () => void;
  onError: (error: Error) => void;
  signal?: AbortSignal;
}
