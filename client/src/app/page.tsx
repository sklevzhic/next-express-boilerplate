import Link from 'next/link';

import { Button } from '@/shared';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
          Добро пожаловать!
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Добро пожаловать в наше приложение! Мы рады видеть вас здесь.
        </p>
        <div className="space-y-6">
          <p className="text-muted-foreground mb-4">
            Хотите связаться с нами? Перейдите к форме обратной связи.
          </p>

          <Link href="/message-form">
            <Button size="lg" className="w-full sm:w-auto">
              Отправить сообщение
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
