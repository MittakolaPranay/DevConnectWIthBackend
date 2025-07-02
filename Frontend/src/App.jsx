import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import  NavBar  from "./components/NavBar";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Upload from "./pages/Upload";
import Reel from "./pages/Reel";
import SearchBar from "./components/Search";
import Footer from "./components/Footer";



function App() {


const router = createBrowserRouter([
  {
    path: "/",
    element: <><NavBar /><SearchBar /><Home /><Footer /></>
  },
  {
    path: "/register",
    element: <><NavBar /><Register /><Footer /></>
  },
  {
    path: "/login",
    element: <><NavBar /><Login /><Footer /></>
  },
  {
    path: "/explore",
    element: <><NavBar /><SearchBar /><Explore /><Footer /></>
  },
  {
    path: "/profile",
    element: <><NavBar /><Profile /><Footer /></>
  },
  {
    path: "upload",
    element: <><NavBar /><Upload /><Footer /></>
  },
  {
    path: "reels",
    element: <><NavBar /><SearchBar /><Reel /><Footer /></>
  }
]);


  return <RouterProvider router={router} />
}

export default App;

