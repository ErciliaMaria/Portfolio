import {createBrowserRouter} from 'react-router-dom'
import App from '../../App'
import AppNav from '../AppNav'
import AppAbout from '../AppAbout'
import AppProjects from '../AppProjects1'
import AppForm from '../AppForm'


const router = createBrowserRouter([
    {
        element: <App />,
        children:[
            {
                path:'/',
                element:<AppNav/>
            },
            {
                path:'/about',
                element:<AppAbout/>
            },
            {
                path:'/project',
                element:<AppProjects/>
            },
            {
                path:'/form',
                element:<AppForm/>
            },
        ]
    }
])