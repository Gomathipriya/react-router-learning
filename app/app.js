import React, {Component} from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import LoginComponent from './Pages/LoginPage';
import LoginForm from './Pages/LoginForm';
import LoginSuccess from './Pages/LoginSuccess';
import RegComponent from './Pages/RegPage';
import RegForm from './Pages/RegForm';
import RegSuccess from './Pages/RegSuccess';
import NavComponent from './Pages/NavPage';

class App extends Component {
    render () {
        return (
            <Router>
                <Route path='/' component={Container}>
                    <IndexRoute component={Home}/>
                    <Route path='/login' component={LoginComponent}>
                        <IndexRoute component={LoginForm}/>
                        <Route path='loginSuccess' component={LoginSuccess}/>
                    </Route>
                    <Route path='/register' component= {RegComponent}>
                        <IndexRoute component={RegForm} />
                        <Route path='regSuccess' component={RegSuccess} />
                    </Route>
                    <Route path='*' component= {NotFound}/>
                </Route>
            </Router>
        )
    }
}
  
  const Container = (props) => <div>
    <NavComponent />
    
    <div className = 'mainDiv'>
    {props.children}
    </div>
  </div>

  const Home = () =>  <div> 
      <h2> Welcome to the Portal </h2>
  </div>


const NotFound = () => <h1> 404 !!!! page Not Found </h1>

export default App