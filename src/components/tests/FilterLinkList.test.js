import React from 'react';
import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import FilterLinkList from '../FilterLinkList';

configure({ adapter: new EnzymeAdapter() });

describe('FilterLink', () => {

  it('should render the FilterLinkList component', () => {
    const filterLinkListWrapper = shallow(<FilterLinkList />);
    const filterLinkList = filterLinkListWrapper.find("[data-test='component-filter-link-list']");
    expect(filterLinkList.length).toEqual(1);
  });

});