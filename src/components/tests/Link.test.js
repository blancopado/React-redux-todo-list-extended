import React from 'react';
import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Link from '../Link';
import * as constants from '../../actions/constants';

configure({ adapter: new EnzymeAdapter() });

describe('Link', () => {

  const mockOnClick = jest.fn();

  it('should render a non clickable link component', ()=> {
    const props = { active: true, onClick: mockOnClick, children: "All" };
    const linkWrapper = shallow(<Link {...props} />);
    const linkElt = linkWrapper.find(`[data-test='component-link-span']`);
    expect(linkElt.exists()).toBe(true);
  });

  it('should render a clickable link component', ()=> {
    const props = { active: false, onClick: mockOnClick, children: "All" };
    const linkWrapper = shallow(<Link {...props} />);
    const linkElt = linkWrapper.find(`[data-test='component-link']`);
    expect(linkElt.exists()).toBe(true);
  });

  describe('when the user wants to change the visibility filter', () => {

    it('should call the onClick function it receives from props', () => {
      const props = { active: false, onClick: mockOnClick, children: "All" };
      const linkWrapper = shallow(<Link {...props} />);
      const linkElt = linkWrapper.find(`[data-test='component-link']`);
      linkElt.simulate('click');
      expect(mockOnClick).toHaveBeenCalled();
    });

  });

});