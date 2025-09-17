import type { Metadata } from 'next';

import { AppProviders } from '@/app';
import { Header } from '@/shared';

import './globals.css';

export const metadata: Metadata = {
  title: 'Отправка сообщений',
  description: 'Простое приложение для отправки и сохранения сообщений',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className="min-h-screen">
        <AppProviders>
          <Header />
          <main className="flex-1">{children}</main>
        </AppProviders>
      </body>
    </html>
  );
}
