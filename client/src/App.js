import './App.css';
import Home from './components/Home.jsx'
import CreateRecipe from './components/CreateRecipe.jsx'
import SearchBar from './components/SearchBar.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SearchBar />

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/post">
          <CreateRecipe />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
