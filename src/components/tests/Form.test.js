import React from 'react';
import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Form from '../Form';
import { storeFactory } from './testUtils';

configure({ adapter: new EnzymeAdapter() });

describe('Form', () => {

	const store = storeFactory({});
	let formWrapper;

	beforeEach(() => {
		formWrapper = shallow(<Form store={store} />).dive();
	});

	it('should render the Form component', () => {
		const form = formWrapper.find("[data-test='component-form']");
		expect(form.length).toEqual(1);
	});

});