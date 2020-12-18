import Header from './Header/Header';
import Home from './Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>
                    <Route path="/checkout">
                        <Header />
                        I AM CHECKOUT PAGE
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
