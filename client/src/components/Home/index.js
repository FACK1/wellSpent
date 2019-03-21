import React, {Component} from 'react';
import './home.css';

export default class AutoComplete extends Component {

  constructor(props) {
      super(props);
      this.ensureFocus = this.ensureFocus;
    }
  renderContent() {
      const items = [1,2,3,4];
      if (this.props.items) {
        let index = 0;
        this.props.items.forEach((item) => {
          index++;
          items.push(this.renderItem({item, index}));
        });
      }
    }
  render() {
    return (
      <div className='main'>
      <div>
        <h1>Well Spent</h1>
        <h2>Helping you to make your shop more ethical</h2>
      </div>
      <div className="main-2">
        <form>
      <input placeholder='Search for brands' className="pt-input"/>
        </form>
        <button className="brands">Brands</button>
      </div>
      <div className="result">
        <p>res1</p>
        <p>res2</p>
      </div>
      <br/>
      <div className="tabout">
      <h3>About US</h3>
      <div className="aboutus">
        <div className='a1'>
        <p>01</p>
          <h4 className='bd'>We are creating a movement to empower customers to make social change, by allowing them to vote with their wallets and put pressure on companies to change by impacting upon their bottom line</h4>
         </div>
        <div className='a1'>
          <p>02</p>
          <h4 className='pd'>We score brands based on their environmental and labour practices</h4>
         </div>
        <div className='a1'>
          <p>03</p>
          <h4 className='pd'>We use information from a range of sources, and encourage our community to share their own knowledge</h4>
         </div>
      </div>
      </div>

      <div className='ext'>
        <h1> Don’t have our Chrome Extension yet? Find out more information <a href="#">Here</a> </h1>
      </div>
      </div>
    )
  }}
