import React from 'react';
import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import FilterLink from '../FilterLink';
import * as constants from '../../actions/constants';

configure({ adapter: new EnzymeAdapter() });

describe('FilterLink', () => {

  const mockOnClick = jest.fn();

  it('should render a non clickable FilterLink component', ()=> {
    const props = { filter: constants.SHOW_ALL , 
                    currentVisibilityFilter: constants.SHOW_ALL, 
                    onClick: mockOnClick, children: "All" };
    const filterLinkWrapper = shallow(<FilterLink {...props} />);
    const filterLinkElt = filterLinkWrapper.find(`[data-test='component-filter-link-span']`);
    expect(filterLinkElt.exists()).toBe(true);
  });

  it('should render a clickable FilterLink component', ()=> {
    const props = { filter: constants.SHOW_ALL , 
                    currentVisibilityFilter: constants.SHOW_ACTIVE, 
                    onClick: mockOnClick, children: "All" };
    const filterLinkWrapper = shallow(<FilterLink {...props} />);
    const filterLinkElt = filterLinkWrapper.find(`[data-test='component-filter-link']`);
    expect(filterLinkElt.exists()).toBe(true);
  });

  describe('when the user wants to change the visibility filter', () => {

    it('should call the onClick function it receives from props', () => {
      const props = { filter: constants.SHOW_ALL, 
                      currentVisibilityFilter: constants.SHOW_ACTIVE, 
                      onClick: mockOnClick, children: "All" };
      const filterLinkWrapper = shallow(<FilterLink {...props} />);
      const filterLinkElt = filterLinkWrapper.find(`[data-test='component-filter-link']`);
      filterLinkElt.simulate('click');
      expect(mockOnClick).toHaveBeenCalled();
    });

  });

});