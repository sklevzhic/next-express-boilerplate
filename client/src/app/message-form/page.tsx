import { MessageForm } from "@/features/message-form";

export default function MessageFormPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl mx-auto w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            Форма обратной связи
          </h1>
          <p className="text-lg text-muted-foreground">
            Оставьте ваше сообщение, и мы свяжемся с вами
          </p>
        </div>
        <MessageForm />
      </div>
    </div>
  );
}
