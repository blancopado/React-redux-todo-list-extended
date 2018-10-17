import React from 'react';
import { configure, shallow, mount } from 'enzyme';
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

	it('should render an input box', () => {
		const inputBox = formWrapper.find("[data-test='input-box']");
		expect(inputBox.length).toEqual(1);
	});

	it('should render a submit input', () => {
		const inputButton = formWrapper.find("[data-test='input-submit']");
		expect(inputButton.length).toEqual(1);
	});

	describe('Redux props', () => {

		it("should pass 'addTodo' action creator as a function prop", () => {
			const addTodoProp = formWrapper.instance().props.addTodo;
			expect(addTodoProp).toBeInstanceOf(Function);
		});

	});

});