'use client';

import { ErrorBoundary } from '@/features/error-handling';
import { QueryProvider } from '@/shared/lib/providers/query-provider';

interface AppProvidersProps {
  children: React.ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ErrorBoundary>
      <QueryProvider>
        {children}
      </QueryProvider>
    </ErrorBoundary>
  );
}
