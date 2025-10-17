"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BotIcon } from '@/components/icons';
import { Paperclip, Send } from 'lucide-react';
import { portfolioAssistant } from '@/ai/flows/portfolio-assistant';
import { ChatBubble } from './chat-bubble';
import { Student } from '@/lib/student-data';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

type AiAssistantProps = {
    student: Student;
};

export function AiAssistant({ student }: AiAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
        const studentDataString = JSON.stringify(student);
        const result = await portfolioAssistant({ query: inputValue, studentData: studentDataString });
        const botMessage: Message = { id: (Date.now() + 1).toString(), text: result.response, sender: 'bot' };
        setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error calling AI assistant:', error);
      const errorMessage: Message = { id: (Date.now() + 1).toString(), text: "Sorry, I'm having trouble connecting. Please try again later.", sender: 'bot' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg"
        size="icon"
        onClick={() => setIsOpen(true)}
      >
        <BotIcon className="h-8 w-8" />
        <span className="sr-only">Open AI Assistant</span>
      </Button>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="flex flex-col p-0 w-full sm:max-w-lg">
          <SheetHeader className="p-4 border-b">
            <SheetTitle className="flex items-center gap-2">
              <BotIcon className="h-6 w-6 text-accent" />
              FolioBot Assistant
            </SheetTitle>
          </SheetHeader>
          <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              <ChatBubble
                message={{
                  id: 'initial',
                  text: `Hello! I'm FolioBot, your personal assistant for this portfolio. Feel free to ask me anything about ${student.name}'s skills, projects, or qualifications.`,
                  sender: 'bot'
                }}
              />
              {messages.map(message => (
                <ChatBubble key={message.id} message={message} />
              ))}
              {isLoading && (
                <ChatBubble
                  message={{
                    id: 'loading',
                    text: '...',
                    sender: 'bot'
                  }}
                  isLoading={true}
                />
              )}
            </div>
          </ScrollArea>
          <SheetFooter className="p-4 border-t">
            <form onSubmit={handleSendMessage} className="flex w-full items-center gap-2">
              <Input
                type="text"
                placeholder="Ask about projects, skills, etc..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading || !inputValue.trim()}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Send Message</span>
              </Button>
            </form>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
