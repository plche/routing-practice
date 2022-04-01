import './App.css';
import {BrowserRouter as Router, Route, Switch, useParams} from "react-router-dom";

const Home = () => <h2 className="Home">Welcome</h2>;

const Param = () => {
    let {id} = useParams();
    if (isNaN(id)) return <h2 className="Param">The word is: {id}</h2>
    else return <h2 className="Param">The number is: {id}</h2>
}

const MoreParam = () => {
    let {id, bgColor, color} = useParams();
    if (isNaN(id)) return <h2 className="MoreParam" style={{backgroundColor: bgColor, color: color}}>The word is: {id}</h2>
}

const App = () => (
    <Router>
        <div className="App">
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/:id/:color/:bgColor">
                    <MoreParam />
                </Route>
                <Route path="/:id">
                    <Param />
                </Route>
            </Switch>
        </div>
    </Router>
);

export default App;
