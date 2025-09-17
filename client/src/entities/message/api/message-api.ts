import { apiClient } from '@/shared/lib/api/client';

export interface MessageData {
  name: string;
  phone: string;
  message: string;
}

export interface MessageResponse {
  id: string;
  name: string;
  phone: string;
  message: string;
  createdAt: string;
}

export const messageApi = {
  create: (data: MessageData): Promise<MessageResponse> => {
    return apiClient.post<MessageResponse>('/api/messages', data);
  },

  getAll: (): Promise<MessageResponse[]> => {
    return apiClient.get<MessageResponse[]>('/api/messages');
  },

  getById: (id: string): Promise<MessageResponse> => {
    return apiClient.get<MessageResponse>(`/api/messages/${id}`);
  },
};
