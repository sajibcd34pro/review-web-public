import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import { BrowserRouter as Router,Switch, Route, } from 'react-router-dom';
import Home from './Components/Home/Home';
import Service from './Components/Services/Service';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Navigation from './Components/Navigation/Navigation';
import NotFound from './Components/Error/NotFound';



// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route  exact path="/service">
            <Service></Service>
          </Route>
          <Route  exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route  exact path="/about">
            <About></About>
          </Route>
          
          
          {/* <Redirect exact to="/"></Redirect> */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
