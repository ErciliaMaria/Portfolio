
import './App.css'
import './index.css'
import AppNav from './components/AppNav'
import AppAbout from './components/AppAbout'
import AppProjects from './components/AppProjects'
import AppSkills from './components/AppSkills'
import { BrowserRouter} from 'react-router-dom';

function App() {

  return (
     <BrowserRouter>
      <AppNav />
      <AppAbout />
      <AppProjects/>
      <AppSkills />
     </BrowserRouter>
  )
}

export default App
