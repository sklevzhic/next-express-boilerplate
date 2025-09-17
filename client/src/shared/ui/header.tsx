'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from './button';

export function Header() {
  const pathname = usePathname();

  return (
    <header className='border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <Link href='/' className='text-xl font-semibold text-foreground'>
            MessageApp
          </Link>
          
          <nav className='flex items-center space-x-4'>
            <Link href='/'>
              <Button 
                variant={pathname === '/' ? 'default' : 'ghost'}
                size='sm'
              >
                Главная
              </Button>
            </Link>
            <Link href='/message-form'>
              <Button 
                variant={pathname === '/message-form' ? 'default' : 'ghost'}
                size='sm'
              >
                Отправить сообщение
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
