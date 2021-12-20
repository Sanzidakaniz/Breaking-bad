import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterDetail from './Components/CharacterDetail/CharacterDetail';
import Header from './Components/Header/Header';


function App() {
  return (
    <div className="App">
  <Router>
  <Header/>
    <Switch>
      <Route exact path="/">
<Home/>
      </Route>
      <Route path="/Home">
<Home/>
      </Route>
      <Route path="/character/:CharacterId">
<CharacterDetail/>
      </Route>
    </Switch>
  </Router>
    </div>
  );
}

export default App;
