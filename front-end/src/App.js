import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import { useEffect } from "react";

import Login from './pages/Login';
import Home from './pages/Home';
import OrgProfileRouter from './pages/OrgProfileRouter';
import AdminRouter from "./pages/admin/AdminRouter";
import UserProvider from "./providers/UserProvider";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';


export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <UserProvider>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/org" component={OrgProfileRouter} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={AdminRouter} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
