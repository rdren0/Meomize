import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';

configure({ adapter: new Adapter() });


const mockInitalState = {
      cards: [],
      loadingScreen: true
  }
describe('App initial state', () => {
  let wrapper;
  wrapper = shallow(<App />);
   it('should match the snapshot with initial state', () => {
    expect(wrapper).toMatchSnapshot();
  });
   it('should have the correct default state', () => {
    expect(wrapper.state()).toEqual(mockInitalState)
   })
})


describe('App', () => {
  let wrapper;

  beforeEach(() => {
   wrapper = shallow(<App />);
   wrapper.setState({ cards: [],
      loadingScreen: true})
 })

  it('should match the snapshot with mock state', () => {
    expect(wrapper).toMatchSnapshot();
  });


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


});
