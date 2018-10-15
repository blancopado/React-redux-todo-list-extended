import * as constants from '../constants';
import * as actions from '../todos';

describe('Todos actions', () => {

	it('should create an action to add a Todo', () => {
		const todo = { id: 1, text: 'Learn Webpack' }
		const expectedAction = {type: constants.ADD_TODO, payload: todo};
		expect(actions.addTodo(todo)).toEqual(expectedAction);
	});

	it('should create an action to toggle a Todo', () => {
		const todoId = 1;
		const expectedAction = {
			type: constants.TOGGLE_TODO,
			payload: { id: todoId }
		};
		expect(actions.toggleTodo(todoId)).toEqual(expectedAction);
	});

});