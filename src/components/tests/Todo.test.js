import React from 'react';
import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Todo from '../Todo';

configure({ adapter: new EnzymeAdapter() });

describe('Todo', () => {

  let todoWrapper,
      todoElt;
  const mockOnClick = jest.fn(),
        props = { text: "Todo1", completed: false, onClick: mockOnClick };
  beforeEach(() => {
    todoWrapper = shallow(<Todo {...props} />);
    todoElt = todoWrapper.find(`[data-test='component-todo']`);
  });

  it('should render a Todo component', ()=> {
    expect(todoElt.exists()).toBe(true);
  });

  it('should render the text of the Todo', () => {
    const todoText = todoElt.text();
    expect(todoText).toBe(props.text);
  });

  describe('when the user wants to mark a Todo as completed', () => {

    it('should call the onClick function it receives from props', () => {
      todoElt.simulate('click');
      expect(mockOnClick).toHaveBeenCalled();
    });

  });

});