import React from 'react';
import logo from '../../../../../assets/logo.png';
import moment from 'moment';
import Marquee from 'react-fast-marquee';
import { Button } from 'react-bootstrap';
const Header = () => {
    return (
        <div>
           <div className='text-center'>
            <img src={logo} />
            <p className='text-secondary'> <small> Journalism without fear or favour</small></p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
           </div>
           <div>
           <Button variant="danger"> Latest </Button>
            <Marquee>
            I can be a React component, multiple React components, or just some text.
            </Marquee>
           </div>
        </div>
    );
};

export default Header;