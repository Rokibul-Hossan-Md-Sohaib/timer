import './App.css';
import Timer, { UseContextProvider } from './Components/Timer';
import ViewHistory from './Components/ViewHistory';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* React router is used for redirect on page to another  */}
      <UseContextProvider>
      <Router>
      <Switch>
        <Route path="/history">
        <ViewHistory/>
        </Route>
        <Route path="">
            <Timer/>
          </Route>
          </Switch>
      </Router>
      
      </UseContextProvider>

    </div>
  );
}

export default App;
