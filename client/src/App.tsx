import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from 'react-router-dom'

 import Home from './pages/Home'
 import About from './pages/About'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
