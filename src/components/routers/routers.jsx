import {createBrowserRouter} from 'react-router-dom'
import App from '../../App'
import AppNav from '../AppNav'
import AppAbout from '../AppAbout'
import AppSkills from '../Skills'
import AppProjects from '../Projects'

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
        ]
    }
])