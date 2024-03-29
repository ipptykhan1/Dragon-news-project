// import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditiorsInsights from '../EditiorsInsights/EditiorsInsights';

const News = () => {
    const news = useLoaderData();
    const { title, details, image_url, category_id} = news;

    return (
       <div>
        < Card className='mb-4'>
        <Card.Img variant="top" src={image_url}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {details}
          </Card.Text>
          <Link to={`/category/${category_id}`}>
          <Button variant="danger"> <FaArrowLeft></FaArrowLeft> All News in this category </Button>
           </Link>
        </Card.Body>
      </Card>

       <EditiorsInsights></EditiorsInsights>
       </div>
    );
};

export default News;