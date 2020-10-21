import Task from "src/data/model/domain/task/task";
import AddTaskInput from "src/data/model/dto/addTaskInput"
import Subscribable from "src/utils/subscribe/subscribable";

export default interface TaskUsecase extends Subscribable<Task[]>{
	getAllTask(): Promise<Task[]>
	getTask(taskId: string): Promise<Task>
	addTask(taskInput: AddTaskInput): Promise<string>
	gainPoint(taskId: string, point: number): Promise<void>
}