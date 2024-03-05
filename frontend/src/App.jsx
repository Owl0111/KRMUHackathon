import { Button } from 'react-bootstrap';
import {createBrowserRouter, RouterProvider, Router} from 'react-router-dom';
import Login from './pages/Login';
import GetUserLocation from './Hooks/UseUserLocation';
import Register from './pages/Register';
import NavigationBar from './components/Navigation';
import UserNgo from './pages/UserNgo';
import Home from './pages/Home';
const router  = createBrowserRouter(
  [
    {
    path:'/',
    element: <Home />
    },
    {
      path:'/login/:type',
      element: <Login />
    },
    {
      path:'/register/:type',
      element: <Register/>
    },
    {
      path:'/logreg',
      element: <UserNgo/>
    }
]
)
function App() {
  console.log(GetUserLocation() )
  return (
    <div>
    <NavigationBar></NavigationBar>
    <RouterProvider router={router} />
    </div>
  );
}


export default App