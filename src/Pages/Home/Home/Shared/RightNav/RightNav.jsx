import React from 'react';
import { Button } from 'react-bootstrap';
import {FaGooglePlusG, FaGithub} from 'react-icons/fa';

const RightNav = () => {
    return (
        <div>
            <h4>Login With:</h4>
            <Button className='mb-2' variant="outline-primary"> <FaGooglePlusG /> Login with Google</Button>
            <br></br>
            <Button variant="outline-secondary"> <FaGithub /> Login with Github</Button>
        </div>
    );
};

export default RightNav;