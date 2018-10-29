import React from 'react';
import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from '../App';

configure({ adapter: new EnzymeAdapter() });

describe('App', () => {

  let appWrapper;
  let match = {};
  match.params = {
    filter: '/'
  }
  beforeEach(() => {
    appWrapper = shallow(<App match={match} />);
  }); 

  it('should render the App component', () => {
    const app = appWrapper.find("[data-test='component-app']");
    expect(app.length).toEqual(1);
  });

  it('should contain a connected AddTodo component', () => {
    expect(appWrapper.find("Connect(AddTodo)").exists()).toBe(true);
  });

  it('should contain a connected TodoList component', () => {
    expect(appWrapper.find("Connect(TodoList)").exists()).toBe(true);
  });

  it('should contain a FilterLink component', () => {
    expect(appWrapper.find("FilterLinkList").exists()).toBe(true);
  });

});