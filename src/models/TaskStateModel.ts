import type { TaskModel } from './TaskModel';


export type TaskStateModel = {
tasks: TaskModel[]; // historico, MainForm
secondsRemaing: number; // Home,CountDown, Historico, MainForm, Button
formattedSecondsRemaing: string;// Titulo,CountDown
activeTaskId: string | null; // CountDown, Button, Historico, mainform, Button
currentCycle: number; // Home
config: {
    workTime: number; // MainForme
    shortBreakTime: number; // MainForme
    longBreakTime: number; // MainForme
};
};