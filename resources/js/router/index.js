import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PromotionsHome from '../pages/promotions-home';
import PromotionWrestlers from '../pages/promotion-wrestlers';
import WrestlerHistory from '../pages/wrestler-history';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import ForgotPassword from '../pages/auth/forgot-password';
import ResetPassword from '../pages/auth/reset-password';
import NotFound from '../pages/404';
import Home from '../pages/home';
import Profile from '../pages/profile';
import AuthRoute from './auth-route';
import GuestRoute from './guest-route';
import { useAuth } from '../context/auth';
import FullPageSpinner from '../components/full-page-spinner';
import EditWrestlerPage from '../pages/edit-wrestler-page';
import AddWrestlerPage from '../pages/add-wrestler-page';

function App () {
  let { initializing } = useAuth();
  return (
    initializing
      ? <FullPageSpinner />
      : <Router>
        <div className="flex flex-col min-h-screen dark:bg-black">
          <Switch>
            <GuestRoute exact path="/" component={PromotionsHome} title="promotions-home" />
            <GuestRoute path="/promotion/:alias/:slug" component={WrestlerHistory} title="wrestler-history" />
            <GuestRoute exact path="/promotion/:alias" component={PromotionWrestlers} title="promotion-wrestlers" />
            <GuestRoute path="/register" component={Register} title="register" />
            <GuestRoute path="/login" component={Login} title="login"/>
            <GuestRoute path="/forgot-password" component={ForgotPassword} title="forgot password"/>
            <GuestRoute path="/password/reset/:token" component={ResetPassword} title="reset password"/>
            <AuthRoute path="/admin/wrestler/:slug" component={EditWrestlerPage} title="edit-wrestler"/>
            <AuthRoute path="/admin/add-wrestler" component={AddWrestlerPage} title="add-wrestler"/>
            <AuthRoute path="/admin" component={Home} title="admin"/>

            <AuthRoute path="/profile/:id" component={Profile} title="profile"/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
  );
};

export default App;
