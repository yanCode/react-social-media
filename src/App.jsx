import Login from "./pages/login/Login";
import NavBar from "./components/navBar";
import LeftBar from "./components/leftBar";
import RightBar from "./components/rightBar";
import {createBrowserRouter, Navigate, Outlet, RouterProvider} from "react-router-dom";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";

const currentUser = true;
const Layout = () => {
  return (<div>
    <NavBar/>
    <div style={{display: 'flex'}}>
      <LeftBar/>
      <div style={{flex:6}}>
        <Outlet/>
      </div>
      <RightBar/>
    </div>
  </div>)
}
const ProtectedRoute = ({children}) => {
  if (!currentUser) {
    return <Navigate to="/login"/>
  }
  return children;
}
const router = createBrowserRouter([
  {
    path: '/',
    element:
      <ProtectedRoute>
        <Layout/>
      </ProtectedRoute>,
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