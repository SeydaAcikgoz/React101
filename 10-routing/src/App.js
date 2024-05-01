import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  BrowserRouter
} from "react-router-dom";

//Pages
import Home from './pages/Dashboard/Home';
import Users from './pages/Dashboard/Users';
import Contact from './pages/Dashboard/Contact';
import UserDetails from './pages/Dashboard/UserDetails';
import Login from './pages/Auth/Login';
import DashboardLayout from './layouts/Dashboard';
import AuthLayout from './layouts/Auth';
import Register from './layouts/Auth/Register';
import Error404 from './pages/Error404';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardLayout />} >
          <Route index element={<Home />} />
          <Route path='users' element={<Users />} />
          <Route path='users/:id' element={<UserDetails />} />
          <Route path='contact' element={<Contact />} />
        </Route>
        <Route path='auth' element={<AuthLayout />}>
          <Route index element={<Login />} />
          {/* Auto girer girmez login saymasını görmek istediğimiz için index yazıldı */}
          <Route path='register' element={<Register />} />
        </Route>
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
//a yerine Link kullanarak sadece componentin yenilenmesi sağlanır bütün sayfa yenilenmez
export default App;