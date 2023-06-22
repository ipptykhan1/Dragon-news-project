import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";

import Category from "../Pages/Home/Category/Category";
import News from "../Pages/News/News/News";
import NewssLayout from "../Layouts/NewssLayout";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";


const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }

        ]

    },
    {
        path:'category',
        element:<Main></Main>,
        children: [

            {
                path:'id',
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
