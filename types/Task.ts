import { User } from "./User";

export interface TaskDefinition {
  /**
   * Unique id of the task
   */
  id: string;
  /**
   * This could be used to connect this entity with an external system.
   */
  externalId?: string;
  title: string;
  description?: string;
  dependentTasks?: TaskDefinition[];
  /**
   * It is possible to define how much time a task takes to complete
   */
  estimatedTimeInSeconds?: number;
}

export interface Task extends Omit<TaskDefinition, "dependentTasks"> {
  isCompleted: boolean;
  completedBy: User;
  completedAt: Date;
  dependentTasks?: Task[];
}
