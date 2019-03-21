import React from 'react';
import './home.css'
const Home = ({ classes, history }) =>{
    return (
      <div className='main'>
      <div>
        <h1>Well Spent</h1>
        <h2>Helping you to make your shop more ethical</h2>
      </div>
      <div className="main-2">
        <form>
          <input className="isearch" placeholder='Search for brands'/>
        </form>
        <button className="brands">Brands</button>
      </div>
      </div>
    )
  }
export default Home;
