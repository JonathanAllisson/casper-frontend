import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './components/HomePage';

function App(){

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                {/* <Route exact path="/dashboard" component={HomePage} /> */}
            </Switch>
        </BrowserRouter>
    )
}

export default App;