export const routes = {
  home: '/',
  messageForm: '/message-form',
} as const;

export type AppRoute = keyof typeof routes;
