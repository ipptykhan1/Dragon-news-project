import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";

import Category from "../Pages/Home/Category/Category";
import News from "../Pages/News/News/News";
import NewssLayout from "../Layouts/NewssLayout";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Category></Category>,
                loader: () => fetch(`http://localhost:5000/news`)
            },
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/
                ${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element:<NewssLayout></NewssLayout>,
        children:[
            {
                path:':id',
                element:<News></News>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
]);

export default router;
