import {Link,BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Signup from "./Signup"
import Signin from "./Signin"
function App() {

  const allRoutes  = (
    <Router>
      <Switch>
        <Route exact path = "/"  component = {Signup} /> 
        <Route exact path = "/signin"  component = {Signin} />
      </Switch>
    </Router>
    
  )
  return (
   allRoutes
  );
}

export default App;
