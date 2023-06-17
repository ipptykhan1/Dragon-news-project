import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import './Header.css'

const Header = () => {
    return (
        <div className='text-center'>
            <div>
               <img src={logo} />
               <p>Journalism Without Fear or Favour</p>
               <p>{moment().format("dddd, MMMM D YYYY")}</p>
            </div>
            <div className='container d-flex'>
                <Button className='btn-danger'>Latest</Button>
                <Marquee className='bg-secondary text-white'>
                I can be a React component, multiple React components, or just some text.
                </Marquee>

            </div>
        </div>
    );
};

export default Header;