"use client";

import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BotIcon } from '@/components/icons';
import { User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

interface ChatBubbleProps {
  message: Message;
  isLoading?: boolean;
}

export function ChatBubble({ message, isLoading = false }: ChatBubbleProps) {
  const isBot = message.sender === 'bot';

  return (
    <div className={cn('flex items-start gap-3', isBot ? '' : 'flex-row-reverse')}>
      <Avatar className="h-8 w-8 border">
        {isBot ? <BotIcon className="m-1 text-accent"/> : <User className="m-1" />}
      </Avatar>
      <div
        className={cn(
          'max-w-[75%] rounded-lg p-3 text-sm',
          isBot ? 'bg-muted' : 'bg-primary text-primary-foreground'
        )}
      >
        {isLoading ? (
          <div className="flex items-center space-x-1">
            <span className="h-2 w-2 animate-pulse rounded-full bg-current" />
            <span className="h-2 w-2 animate-pulse rounded-full bg-current [animation-delay:0.2s]" />
            <span className="h-2 w-2 animate-pulse rounded-full bg-current [animation-delay:0.4s]" />
          </div>
        ) : (
          <p className="whitespace-pre-wrap">{message.text}</p>
        )}
      </div>
    </div>
  );
}
