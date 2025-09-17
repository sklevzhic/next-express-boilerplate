import { cn } from '@/shared/lib/cn';

interface ErrorMessageProps {
  message: string;
  className?: string;
}

export function ErrorMessage({ message, className }: ErrorMessageProps) {
  return (
    <div className={cn('text-sm text-red-600 mt-1', className)}>
      {message}
    </div>
  );
}
