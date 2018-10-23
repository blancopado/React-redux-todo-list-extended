import React from 'react';
import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Todo from '../Todo';

configure({ adapter: new EnzymeAdapter() });

describe('Todo', () => {

  let todoWrapper,
      todoElt;
  const mockOnToggleClick = jest.fn(),
        mockOnDeleteClick = jest.fn(),
        props = { text: "Todo1", completed: false, onToggleClick: mockOnToggleClick, onDeleteClick: mockOnDeleteClick };
  beforeEach(() => {
    todoWrapper = shallow(<Todo {...props} />);
    todoElt = todoWrapper.find(`[data-test='component-todo']`);
  });

  it('should render a Todo component', ()=> {
    expect(todoElt.exists()).toBe(true);
  });

  it('should render the text of the Todo', () => {
    const todoText = todoElt.find('span').text();
    expect(todoText).toBe(props.text);
  });

  describe('when the user wants to mark a Todo as completed', () => {

    it('should call the onToggleClick function it receives from props', () => {
      todoElt.simulate('click');
      expect(mockOnToggleClick).toHaveBeenCalled();
    });
    
  });

  describe('when the user wants to delete a Todo', () => {
    
    it('should call the onDeleteClick function it receives from props', () => {
      todoElt.find('button').simulate('click');
      expect(mockOnToggleClick).toHaveBeenCalled();
    });

  });

});