import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
// import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
function App () {
  return (
  <Router>
    <Switch>
    <Route path="/" element={<Login/>} /> 
      <Route path="/Home" element={<Home/>} replace={true}/> 
      <Route path="/about" element={<About/>} /> 
      <Route path="*" element={<NotFound/>} />
    </Switch>
  </Router>
);
}
export default App;