'use client';

import { Button, Form, FormField, FormItem, FormLabel, FormControl, FormMessage, Input } from '@/shared';

import { useMessageForm } from '../model/use-message-form';

export function MessageForm() {
  const { form, onSubmit, isSubmitting, submitSuccess, submitError } = useMessageForm();

  return (
    <div className='bg-card rounded-lg p-6 space-y-6'>
      <Form form={form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Имя *
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Введите ваше имя"
                    disabled={isSubmitting}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Телефон *
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="+375XXXXXXXXX или 80XXXXXXXXX"
                    disabled={isSubmitting}
                    type="tel"
                    onChange={(e) => {
                      let value = e.target.value;
                      
                      value = value.replace(/[^\d+]/g, '');
                      
                      if (value.startsWith('+375')) {
                        if (value.length > 13) {
                          value = value.slice(0, 13);
                        }
                      } else if (value.startsWith('80')) {
                        if (value.length > 11) {
                          value = value.slice(0, 11);
                        }
                      } else if (value.startsWith('375')) {
                        if (value.length > 12) {
                          value = value.slice(0, 12);
                        }
                      }
                      
                      field.onChange(value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Сообщение *
                </FormLabel>
                <FormControl>
                  <textarea
                    {...field}
                    placeholder="Введите ваше сообщение"
                    className='flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none'
                    disabled={isSubmitting}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {submitSuccess && (
            <div className='p-4 bg-green-50 border border-green-200 rounded-lg shadow-sm'>
              <div className='flex items-center space-x-3'>
                <div className='flex-shrink-0'>
                  <svg className='w-5 h-5 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                </div>
                <div>
                  <h3 className='text-sm font-medium text-green-800'>
                    Успешно отправлено!
                  </h3>
                  <p className='text-sm text-green-700 mt-1'>
                    Ваше сообщение было успешно доставлено. Мы свяжемся с вами в ближайшее время.
                  </p>
                </div>
              </div>
            </div>
          )}

          {submitError && (
            <div className='p-4 bg-red-50 border border-red-200 rounded-lg shadow-sm'>
              <div className='flex items-center space-x-3'>
                <div className='flex-shrink-0'>
                  <svg className='w-5 h-5 text-red-500' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z' clipRule='evenodd' />
                  </svg>
                </div>
                <div>
                  <h3 className='text-sm font-medium text-red-800'>
                    Ошибка отправки
                  </h3>
                  <p className='text-sm text-red-700 mt-1'>
                    {submitError}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className='pt-6'>
            <Button
              type="submit"
              disabled={isSubmitting}
              className='w-full'
            >
              {isSubmitting ? (
                <div className='flex items-center justify-center space-x-2'>
                  <div className='w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin' />
                  <span>Отправка...</span>
                </div>
              ) : (
                'Отправить сообщение'
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
