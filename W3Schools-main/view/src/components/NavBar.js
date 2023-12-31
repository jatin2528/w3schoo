import React, { Component } from 'react';
import logo from '../imgs/logo.png';
import Button from './Button';
import MainTitle from './MainTitle';

export default class NavBar extends Component {
    constructor(){
        super();
        this.state = {
            mainTitles: ['Tutorials', 'References', 'Exercises', 'Videos'],
        }
    }
  render() {
    return (
        <div className="navbar">
            <div className='left-items'>
                <img alt="logo" src={ logo }></img>
                {
                    this.state.mainTitles.map((value, key) => {
                        if(value !== 'Videos') {
                            return (
                                <MainTitle header = {value} key = {key} icon = {'visible'}></MainTitle>
                            )
                        }
                        else {
                            return (
                                <MainTitle header = {value} key = {key} icon = {'hidden'}></MainTitle>
                            )
                        }
                    })
                }
            </div>
            <div className='right-items'>
                <i className="fa-solid fa-circle-half-stroke"></i>
                <i className="fa-solid fa-earth-americas"></i>
                <i className="fas fa-search"></i>
                <Button text = { 'Pro' } backgroundColor = { '#04aa6d' } color = { '#fff' } width = { 16 }  />
                <Button text = { 'Get Certified' } backgroundColor = { '#04aa6d' } color = { '#fff' } width = { 16 } />
                <Button text = { 'Log in' } backgroundColor = { '#04aa6d' } color = { '#fff' } width = { 40 } />
                <Button text = { 'Sign up' } backgroundColor = { '#04aa6d' } color = { '#fff' } width = { 40 } />
            </div>
        </div>   
        
    )
  }
}
