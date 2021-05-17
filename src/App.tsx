import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';

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