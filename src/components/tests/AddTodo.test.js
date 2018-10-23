import React from 'react';
import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import AddTodo from '../AddTodo';
import { storeFactory } from './testUtils';

configure({ adapter: new EnzymeAdapter() });

describe('AddTodo', () => {

  const store = storeFactory({});
  let addTodoWrapper;

  beforeEach(() => {
    addTodoWrapper = shallow(<AddTodo store={store} />).dive();
  });

  it('should render the Form component', () => {
    const addTodo = addTodoWrapper.find("[data-test='component-form']");
    expect(addTodo.length).toEqual(1);
  });

  it('should render an input box', () => {
    const inputBox = addTodoWrapper.find("[data-test='input-box']");
    expect(inputBox.length).toEqual(1);
  });

  it('should render a submit input', () => {
    const inputButton = addTodoWrapper.find("[data-test='input-submit']");
    expect(inputButton.length).toEqual(1);
  });
  
});