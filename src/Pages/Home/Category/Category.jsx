// import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import News from '../../News/News/News';


const Category = () => {

    const {id} = useParams();
    const categoryNews = useLoaderData();
    return (
        <div>
            <h1>This Category:  {categoryNews.length}</h1>
            
             {
                categoryNews.map(news => <NewsCard
                key={news._id}
                news={news}
                ></NewsCard>)

             }

        </div>
    );
};

export default Category;