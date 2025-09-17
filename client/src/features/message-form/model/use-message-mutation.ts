import { useMutation } from '@tanstack/react-query';

import { messageApi, type MessageData } from '@/entities/message';

export function useMessageMutation() {
  return useMutation({
    mutationFn: (data: MessageData) => messageApi.create(data),
  });
}
