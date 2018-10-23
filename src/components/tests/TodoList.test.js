import React from 'react';
import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import TodoList from '../TodoList';

configure({ adapter: new EnzymeAdapter() });

describe('TodoList', () => {

  const todos =  [{ id: 1, text: 'todo1', completed: false}, { id: 2, text: 'todo2', completed: false }];
  const mockOnClick = jest.fn();
  let todoListWrapper;

  beforeEach(() => {
    todoListWrapper = shallow(<TodoList todos={todos} onTodoClick={mockOnClick} />);
  });

  it('should render the TodoList component', () => {
    const todolist = todoListWrapper.find(`[data-test='component-todolist']`);
    expect(todolist.length).toEqual(1);
  });

  it('should render the list of todos', () => {
    expect(todoListWrapper.find('ul').children().length).toEqual(todos.length);
  });

});