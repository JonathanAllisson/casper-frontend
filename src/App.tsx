import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import Notice from './pages/Notice';

function App(){

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/dashboard" component={Dashboard} /> 
                <Route exact path="/notice/:id" component={Notice} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;