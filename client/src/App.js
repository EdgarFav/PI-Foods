import './App.css';
import Home from './components/Home/Home.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
