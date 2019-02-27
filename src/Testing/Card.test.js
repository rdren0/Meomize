import React from 'react';
import Card from '../Components/Card.js';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const answerVisible = jest.fn();

const mockCard = {
"id": 2,
"type": "syntax",
"title": "What goes in the parameters of a Reduce?",
"answer": "Acc and Current Value",
"complete": false
}

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Card
                key={mockCard.id} 
                cardType={mockCard.type} 
                cardTitle={mockCard.title} 
                cardAnswer={mockCard.answer} />
    )
  })
  
  it('should match the snapshot with all data passed in' , () =>{
    expect(wrapper).toMatchSnapshot();
  });

  it('should toggle answer', () => {
    wrapper.find('.show-answer').simulate('click');
    expect(wrapper.state('showAnswer')).toEqual(true);
  });
});



