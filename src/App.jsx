
import './App.css'
import AppNav from './components/AppNav'
import AppAbout from './components/AppAbout'
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
     <BrowserRouter>
      <AppNav />
      <AppAbout />
     </BrowserRouter>
  )
}

export default App
