import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
    id: string;
    name: string;
    durantion: number; // duration in minutes
    startDate: number;
    completeDate: number | null; // quando a task for completada
    interruptedDate: number | null; // quando a task for interrompida
    type: keyof TaskStateModel; //
};