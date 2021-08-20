import {Hero} from './components/hero/Hero'
import {Skills} from './components/sections/skills/Skills'
import {Projects} from './components/sections/projects/Projects'
import {About} from './components/sections/about/About'
import {Contact} from './components/sections/contact/Contact'


import {MainLayout} from './components/layout/MainLayout'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
     
      <Router> 
        <Switch>
        <MainLayout>
        
          <Route path="/Skills" children={<Skills />} />
          <Route path="/Projects" children={<Projects />} />
          <Route path="/About" children={<About />} />
          
          <Route path="/Contact" children={<Contact />} />
        
          <Route path="/" children={<Hero />} />
    
      

      
      </MainLayout>
        </Switch>
       
        
        </Router>
        
    </div>
  );
}

export default App;
