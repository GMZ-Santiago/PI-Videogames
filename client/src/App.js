import { Home, Landing, Form, Detail } from "./Views";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";

function App() {
  const location = useLocation;

  return (
    <Router>
      <Switch>
        <div className="App">
        {location.pathname !== "/" && <NavBar/>}
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component ={Home} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/create" component={Form} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;

// import {Route, BrowserRouter, useLocation} from "react-router-dom";
// import {Home, Landing, Form, Detail} from "./Views";
// import NavBar from "./Components/NavBar/NavBar";


// function App() {
// const location = useLocation()

//   return (
//     <BrowserRouter>
//     <div className="App">
//     {location.pathname !== "/" && <NavBar />}
// //       <Route path="/" element={<Landing />} />
// //       <Route path="/home" element={<Home />} />
// //       <Route path="/detail" element={<Detail />} />
// //       <Route path="/create" element={<Form />} />
//       </div>
//       </BrowserRouter>
//   )
// }

// export default App;