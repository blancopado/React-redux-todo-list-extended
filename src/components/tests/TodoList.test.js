import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import TodoList from '../TodoList';
import { storeFactory } from './testUtils';

configure({ adapter: new EnzymeAdapter() });

describe('TodoList', () => {

  const store = storeFactory([{ id: 1, text: 'todo1'}, { id: 2, text: 'todo2' }]);
  let todoListWrapper;
  beforeEach(() => {
    todoListWrapper = shallow(<TodoList store={store} />).dive();
  });

  it('should render the TodoList component', () => {
    const todolist = todoListWrapper.find(`[data-test='component-todolist']`);
    expect(todolist.length).toEqual(1);
  });

  it('should render the list of todos', () => {
    const todos = store.getState();
    expect(todoListWrapper.find('ul').children().length).toEqual(todos.length);
  });

});