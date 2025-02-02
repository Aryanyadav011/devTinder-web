import { BrowserRouter, Routes,Route } from "react-router-dom";
// import NavBar from "./NavBar";
import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./Feed";
import Connections from "./Connections";
import Requests from "./Requests";


function App() {
  
  return (
    <div >
      <Provider store = {appStore}>
    <BrowserRouter basename="/">
    <Routes>
    <Route path="/" element={<Body />}>
    <Route path="/" element={<Feed />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/profile" element={<Profile />}/>
    <Route path="/connections" element={<Connections />}/>
    <Route path="/requests" element={<Requests />}/>
    </Route>
      
    </Routes>

    </BrowserRouter>
    </Provider>
    {/* <NavBar/> */}
    {/* <h1 className = "text-3xl font-bold ">Hello world</h1> */}
    
    </div>
  );
}

export default App;
