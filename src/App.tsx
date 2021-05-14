import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';

function App(){

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/dashboard" component={Dashboard} /> 
            </Switch>
        </BrowserRouter>
    )
}

export default App;