import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import {FaGooglePlusG, FaGithub, FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';
import Qzon from '../Qzon/Qzon';

const RightNav = () => {
    return (
        <container >
            <h4>Login With:</h4>
            <Button className='mb-2' variant="outline-primary"> <FaGooglePlusG /> Login with Google</Button>
          
            <Button variant="outline-secondary"> <FaGithub /> Login with Github</Button>
            <div className='mb-3'>
                <h4> Find us on</h4>
            <ListGroup>
             <ListGroup.Item> <FaFacebookF/> facebook</ListGroup.Item>
             <ListGroup.Item> <FaTwitter/>twitter</ListGroup.Item>
             <ListGroup.Item><FaInstagram/> instagram</ListGroup.Item>
           </ListGroup>
            </div>
            <Qzon></Qzon>
        </container>
    );
};

export default RightNav;