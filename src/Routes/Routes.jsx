import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
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
                element:<Home></Home>
            },
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader: 
            }
        ]
    },
    {
        path: 'news',
        element:<NewssLayout></NewssLayout>,
        children:[
            {
                path:':id',
                element:<News></News>
            }
        ]
    }
]);

export default router;
