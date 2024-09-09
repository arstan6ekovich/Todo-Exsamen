import { api as index } from '..';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getTodo: build.query<TODO.GetTodoResponse, TODO.GetTodoRequest>({
			query: () => ({
				url: '/marchik', 
				method: 'GET'
			}),
			providesTags: ['todo']
		}),
		postTodo: build.mutation<TODO.PostTodoResponse, TODO.PostTodoRequest>({
			query: (newTodo) => ({
				url: '/marchik', 
				method: 'POST',
				body: newTodo
			}),
			invalidatesTags: ['todo']
		}),
		deleteTodo: build.mutation<TODO.DeleteTodoResponse, TODO.DeleteTodoRequest>(
			{
				query: (_id) => ({
					url: `/marchik/${_id}`, 
					method: 'DELETE'
				}),
				invalidatesTags: ['todo']
			}
		),
		editTodo: build.mutation<TODO.EditTodoResponse, TODO.EditTodoRequest>({
			query: ({ _id, updateToDo }) => ({
				url: `/marchik/${_id}`, 
				method: 'PATCH', 
				body: updateToDo
			}),
			invalidatesTags: ['todo']
		})
	})
});

export const {
	useGetTodoQuery,
	usePostTodoMutation,
	useDeleteTodoMutation,
	useEditTodoMutation
} = api;
