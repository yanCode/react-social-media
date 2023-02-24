import Login from "./pages/login/Login";
import NavBar from "./components/navBar";
import LeftBar from "./components/leftBar";
import RightBar from "./components/rightBar";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";

const Layout = () => {
  return (<div>
    <NavBar/>
    <div style={{display: 'flex'}}>
      <LeftBar/>
      <Outlet/>
      <RightBar/>
    </div>
  </div>)
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {path: '/', element: <Home/>},
      {
        path: 'profile/:id',
        element: <Profile/>
      },
    ]
  },
  {path: '/login', element: <Login/>,},
  {path: '/register', element: <Register/>}]);


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;