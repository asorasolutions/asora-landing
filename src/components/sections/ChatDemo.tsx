'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User, Sparkles, RotateCcw } from 'lucide-react';
import { Container, Button, GradientText } from '@/components/ui';
import { useTranslation } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import type { ChatMessage, ChatScenario } from '@/types';

/**
 * Typing indicator component
 */
function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-2">
      <motion.span
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 1.4 }}
        className="w-2 h-2 bg-primary rounded-full"
      />
      <motion.span
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 1.4, delay: 0.2 }}
        className="w-2 h-2 bg-primary rounded-full"
      />
      <motion.span
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 1.4, delay: 0.4 }}
        className="w-2 h-2 bg-primary rounded-full"
      />
    </div>
  );
}

/**
 * Chat message bubble component
 */
function ChatBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={cn('flex gap-3 max-w-[85%]', isUser ? 'ml-auto flex-row-reverse' : '')}
    >
      {/* Avatar */}
      <div
        className={cn(
          'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0',
          isUser
            ? 'bg-primary/20 text-primary'
            : 'bg-gradient-to-br from-primary to-secondary text-white'
        )}
      >
        {isUser ? <User size={16} /> : <Bot size={16} />}
      </div>

      {/* Message */}
      <div
        className={cn(
          'px-4 py-3 rounded-2xl text-sm leading-relaxed',
          isUser
            ? 'bg-primary/20 text-white rounded-tr-sm'
            : 'bg-dark-card border border-dark-border text-[var(--color-text-secondary)] rounded-tl-sm'
        )}
      >
        {message.content.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            {i < message.content.split('\n').length - 1 && <br />}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

/**
 * Scenario selector tab
 */
function ScenarioTab({
  scenario,
  isActive,
  onClick,
}: {
  scenario: ChatScenario;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
        isActive
          ? 'bg-gradient-to-r from-primary to-secondary text-white'
          : 'bg-dark-card text-[var(--color-text-muted)] hover:text-white hover:bg-dark-lighter border border-dark-border'
      )}
    >
      {scenario.title}
    </button>
  );
}

/**
 * Interactive AI Chat Demo component
 * Demonstrates AI capabilities through pre-scripted conversations
 */
export function ChatDemo() {
  const { t } = useTranslation();

  // Build scenarios from translations
  const scenarios: ChatScenario[] = useMemo(() => {
    const scenarioData = t.chatDemo.scenarios;
    const delays = [0, 1500, 3500, 5500, 7000, 8500];

    return [
      {
        id: 'customer-service',
        title: scenarioData.customerService.title,
        description: scenarioData.customerService.description,
        messages: scenarioData.customerService.messages.map((msg: { role: string; content: string }, i: number) => ({
          id: String(i + 1),
          role: msg.role as 'user' | 'assistant',
          content: msg.content,
          delay: delays[i] || i * 1500,
        })),
      },
      {
        id: 'lead-qualification',
        title: scenarioData.leadQualification.title,
        description: scenarioData.leadQualification.description,
        messages: scenarioData.leadQualification.messages.map((msg: { role: string; content: string }, i: number) => ({
          id: String(i + 1),
          role: msg.role as 'user' | 'assistant',
          content: msg.content,
          delay: delays[i] || i * 1500,
        })),
      },
      {
        id: 'appointment',
        title: scenarioData.appointment.title,
        description: scenarioData.appointment.description,
        messages: scenarioData.appointment.messages.map((msg: { role: string; content: string }, i: number) => ({
          id: String(i + 1),
          role: msg.role as 'user' | 'assistant',
          content: msg.content,
          delay: delays[i] || i * 1500,
        })),
      },
    ];
  }, [t.chatDemo.scenarios]);

  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const activeScenario = scenarios[activeScenarioIndex];
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout[]>([]);

  // Clear timeouts on cleanup
  useEffect(() => {
    return () => {
      timeoutRef.current.forEach(clearTimeout);
    };
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [visibleMessages, isTyping]);

  // Reset and play scenario
  const playScenario = useCallback(() => {
    // Clear existing timeouts
    timeoutRef.current.forEach(clearTimeout);
    timeoutRef.current = [];

    setVisibleMessages([]);
    setIsPlaying(true);

    let cumulativeDelay = 0;

    activeScenario.messages.forEach((message, index) => {
      const messageDelay = message.delay ?? 0;
      cumulativeDelay += messageDelay;

      // Show typing indicator before assistant messages
      if (message.role === 'assistant' && index > 0) {
        const typingTimeout = setTimeout(() => {
          setIsTyping(true);
        }, cumulativeDelay);
        timeoutRef.current.push(typingTimeout);
        cumulativeDelay += 1000; // Typing duration
      }

      // Show message
      const messageTimeout = setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages((prev) => [...prev, message]);
      }, cumulativeDelay);
      timeoutRef.current.push(messageTimeout);
    });

    // Mark as finished
    const finishTimeout = setTimeout(() => {
      setIsPlaying(false);
    }, cumulativeDelay + 500);
    timeoutRef.current.push(finishTimeout);
  }, [activeScenario]);

  // Start demo on mount and scenario change
  useEffect(() => {
    // Defer to avoid synchronous setState during render
    const timeoutId = setTimeout(playScenario, 0);
    return () => clearTimeout(timeoutId);
  }, [playScenario]);

  // Handle scenario change
  const handleScenarioChange = (index: number) => {
    if (index !== activeScenarioIndex) {
      timeoutRef.current.forEach(clearTimeout);
      timeoutRef.current = [];
      setActiveScenarioIndex(index);
    }
  };

  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />
      </div>

      {/* Bottom gradient fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent pointer-events-none z-10" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={18} className="text-primary" />
              <span className="text-sm text-primary uppercase tracking-wider font-medium">
                {t.chatDemo.sectionLabel}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
              {t.chatDemo.title} <GradientText>{t.chatDemo.titleHighlight}</GradientText>
            </h2>

            <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
              {t.chatDemo.description}
            </p>

            {/* Scenario Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {scenarios.map((scenario, index) => (
                <ScenarioTab
                  key={scenario.id}
                  scenario={scenario}
                  isActive={activeScenarioIndex === index}
                  onClick={() => handleScenarioChange(index)}
                />
              ))}
            </div>

            <p className="text-sm text-[var(--color-text-muted)]">
              {activeScenario.description}
            </p>
          </motion.div>

          {/* Right - Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              {/* Chat Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-dark-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Bot size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Asora AI</h4>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-xs text-[var(--color-text-muted)]">{t.chatDemo.online}</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={playScenario}
                  disabled={isPlaying}
                  className="text-[var(--color-text-muted)] hover:text-white"
                >
                  <RotateCcw size={16} />
                  {t.chatDemo.replay}
                </Button>
              </div>

              {/* Chat Messages */}
              <div
                ref={chatContainerRef}
                className="h-[400px] overflow-y-auto p-6 space-y-4 scroll-smooth"
              >
                <AnimatePresence>
                  {visibleMessages.map((message) => (
                    <ChatBubble key={message.id} message={message} />
                  ))}
                </AnimatePresence>

                {isTyping && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Bot size={16} className="text-white" />
                    </div>
                    <div className="bg-dark-lighter border border-dark-border rounded-2xl rounded-tl-sm">
                      <TypingIndicator />
                    </div>
                  </div>
                )}
              </div>

              {/* Input placeholder */}
              <div className="px-6 py-4 border-t border-dark-border">
                <div className="flex items-center gap-3 bg-dark-lighter rounded-xl px-4 py-3 border border-dark-border">
                  <span className="text-[var(--color-text-muted)] text-sm flex-1">
                    {t.chatDemo.demoNote}
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
