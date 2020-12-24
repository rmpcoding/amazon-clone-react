import Header from './Header/Header';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';

function App() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
