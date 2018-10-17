import React from 'react';
import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from '../App';

configure({ adapter: new EnzymeAdapter() });

describe('App', () => {

  let appWrapper;
  beforeEach(() => {
    appWrapper = shallow(<App />);
  });

  it('should render the App component', () => {
    const app = appWrapper.find("[data-test='component-app']");
    expect(app.length).toEqual(1);
  });

  it('should contain a connected Form component', () => {
    expect(appWrapper.find("Connect(Form)").exists()).toBe(true);
  });

  it('should contain a TodoList component', () => {
    expect(appWrapper.find("Connect(TodoList)").exists()).toBe(true);
  });

});