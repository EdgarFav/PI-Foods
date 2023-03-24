import './App.css';
import Home from './components/Home/Home.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import CreateRecipe from './components/CreateRecipe/CreateRecipe.jsx'
import Detail from './components/Detail/Detail.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'
axios.defaults.baseURL = 'https://pi-foods-production-7242.up.railway.app/'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/:id" component={Detail} />
          <Route exact path="/recipe" component={CreateRecipe} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
