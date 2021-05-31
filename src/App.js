import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./components/home/home";
import Header from "./components/header/header";
import Menu from './components/menu/menu';

function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/menu'} render={() => <Menu/>}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
