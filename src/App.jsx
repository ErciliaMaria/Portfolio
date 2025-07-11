import AppNav from './components/AppNav'
import AppAbout from './components/AppAbout'
import AppProjects from './components/AppProjects'
import AppForm from './components/AppForm'
import { BrowserRouter} from 'react-router-dom';

function App() {

  return (
     <BrowserRouter>
      <AppNav />
      <AppAbout />
      <AppProjects/>
      <AppForm />
     </BrowserRouter>
  )
}

export default App
