import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <Header exact path="/" />
          <About exact path="/about" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
