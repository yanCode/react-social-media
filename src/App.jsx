import Login from "./pages/login/Login";
import NavBar from "./components/navBar/navBar";
import LeftBar from "./components/leftBar/leftBar";
import RightBar from "./components/rightBar/rightBar";
import {createBrowserRouter, Navigate, Outlet, RouterProvider} from "react-router-dom";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import {DarkModeContext} from "./context/DarkModeContext";
import {useContext} from "react";
import {AuthContext} from "./context/authContext";


const Layout = () => {
  const {darkMode} = useContext(DarkModeContext);
  return (<div className={`${darkMode ? 'theme-dark' : 'theme-light'}`}>
    <NavBar/>
    <div style={{display: 'flex'}}>
      <LeftBar/>
      <div style={{flex: 6}}>
        <Outlet/>
      </div>
      <RightBar/>
    </div>
  </div>)
}
const ProtectedRoute = ({children}) => {
  const {currentUser} = useContext(AuthContext);
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