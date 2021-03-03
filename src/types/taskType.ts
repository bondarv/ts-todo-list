// Созданная задача имеет название и статус готовности
export interface Task {
  name: string;
  isDone: boolean;
}

export type Tasks = Task[];
