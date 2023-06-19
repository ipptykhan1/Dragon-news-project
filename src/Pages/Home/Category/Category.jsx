import React from 'react';
import { useParams } from 'react-router-dom';


const Category = () => {

    const {id} = useParams();
    return (
        <div>
            <h1>this is catrgory: {id}</h1>
            
        </div>
    );
};

export default Category;