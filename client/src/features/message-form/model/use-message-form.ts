'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useMessageMutation } from './use-message-mutation';
import { messageFormSchema, type MessageFormData } from './validation-schemas';

export function useMessageForm() {
  const mutation = useMessageMutation();

  const form = useForm<MessageFormData>({
    resolver: zodResolver(messageFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (data: MessageFormData) => {
    await mutation.mutateAsync(data);
    form.reset();
  };

  return {
    form,
    onSubmit,
    isSubmitting: mutation.isPending,
    submitSuccess: mutation.isSuccess,
    submitError: mutation.error?.message || null,
  };
}
