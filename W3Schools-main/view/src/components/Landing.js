import React, { Component } from 'react'
import SearchBar from './SearchBar'
import wave from '../imgs/svg.png';
import background_in_space from '../imgs/background_in_space.gif';

export default class Landing extends Component {
  render() {
    return (
      <div className='landing'>
        <h1>Learn to Code</h1>
        <h3>With the world's largest web developer site.</h3>
        <SearchBar/>
        <h4>Not Sure Where To Begin?</h4>
        <img src={wave} alt='wave'></img>
      </div>
    )
  }
}
