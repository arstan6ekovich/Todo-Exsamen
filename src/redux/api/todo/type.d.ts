/* eslint-disable @typescript-eslint/no-unused-vars */
namespace TODO {
	interface TodoData {
		_id?: number;
		title: string;
		text: string;
		photo: string;
	}

	type GetTodoResponse = TodoData[];
	type GetTodoRequest = void;

	type PostTodoResponse = TodoData[];
	type PostTodoRequest = TodoData;

	type DeleteTodoResponse = TodoData[];
	type DeleteTodoRequest = number;

	type EditTodoResponse = TodoData[];
	type EditTodoRequest = {
		_id: number;
		updateToDo: TodoData;
	};
}
