import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from './pages/settings/Settings.jsx';
import Login from "./pages/login/Login";
import Register from"./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
 // Link
} from "react-router-dom";
function App() {
  const user=true;
  return (
    <Router>
      <Topbar/>
      <Routes>
        <Route path="/" element={ <Home/>}> </Route>
        <Route path="/register" element={user ? <Home/> : <Register/>}> </Route>
        <Route path="/login" element={ user ? <Home/> :<Login/>}> </Route>
        <Route path="/write" element={user ?  <Write/>: <Register/>}> </Route>
        <Route path="/settings" element={ user ?  <Settings/> : <Register/>}> </Route>
        <Route path="/post/:postId" element={ <Single/>}> </Route>

      </Routes>
      <Register/>

    </Router>
  );
}

export default App;