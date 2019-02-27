import React from 'react';
import Review from '../Components/Review';
import { shallow } from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const selectCategory = jest.fn();

const mockCard = {
"id": 2,
"type": "syntax",
"title": "What goes in the parameters of a Reduce?",
"answer": "Acc and Current Value",
"complete": false
}

describe('Review', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Review
                key={mockCard.id} 
                cardType={mockCard.type} 
                cardTitle={mockCard.title} 
                cardAnswer={mockCard.answer} />
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });


  it('should have the proper defualt state', () => {
    expect(wrapper.state('complete')).toEqual(false);
  });



});