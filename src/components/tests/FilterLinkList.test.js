import React from 'react';
import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import FilterLinkList from '../FilterLinkList';
import { storeFactory } from './testUtils';

configure({ adapter: new EnzymeAdapter() });

describe('FilterLink', () => {

  const mockOnClick = jest.fn();
  const store = storeFactory({});
  let filterLinkListWrapper;

  beforeEach(() => {
    filterLinkListWrapper = shallow(<FilterLinkList store={store} onClick={mockOnClick} />).dive();
  });

  it('should render the FilterLinkList component', () => {
    const filterLinkList = filterLinkListWrapper.find("[data-test='component-filter-link-list']");
    expect(filterLinkList.length).toEqual(1);
  });

});