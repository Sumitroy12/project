import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import ActivationEmail from './auth/ActivationEmail'
import NotFound from '../utils/NotFound/NotFound'

import ForgotPass from '../body/auth/ForgotPassword'
import ResetPass from '../body/auth/ResetPassword'

import Profile from '../body/profile/Profile'
import EditUser from '../body/profile/EditUser'
import Vendors from '../../components/pages/Vendors';
import Services from '../../components/pages/Services';
import Home from '../body/home/Home';
import Photographer from '../pages/photographer/photographer'
import Bridal from '../pages/bridal/bridal'
import Choreographer from '../pages/choreographers/choreographer'
import Decorators from '../pages/decorators/decorators'
import Dj from '../pages/dj/dj'
import Makeup from '../pages/makeup/makeup'
import Mehandi from '../pages/mehandi/mehandi'
import Venues from '../pages/venues/venue'
import VendorProfile from '../pages/photographer/photovendor'
import About from '../pages/about_us'
import Service from '../pages/terms/terms'

import {useSelector} from 'react-redux'
import SimpleReactLightbox from 'simple-react-lightbox';
import Contact from '../pages/contact_us/contact'

function Body() {
    const auth = useSelector(state => state.auth)
    const {isLogged, isAdmin} = auth
    return (
        <section>
            <Switch>
                <Route path="/" component={Home} exact />

                <Route path="/login" component={isLogged ? NotFound : Login} exact />
                <Route path="/register" component={isLogged ? NotFound : Register} exact />

                <Route path="/forgot_password" component={isLogged ? NotFound : ForgotPass} exact />
                <Route path="/user/reset/:token" component={isLogged ? NotFound : ResetPass} exact />

                <Route path="/user/activate/:activation_token" component={ActivationEmail} exact />

                <Route path="/profile" component={isLogged ? Profile : NotFound} exact />
                <Route path="/edit_user/:id" component={isAdmin ? EditUser : NotFound} exact />

                {/* -------------------------pages----------------------------------------- */}

                <Route path='/Vendors' exact component={Vendors} />
                <Route path='/services' exact component={Services} />
                <Route path='/photographers' exact component={Photographer} />
                <Route path='/bridaldesigner' exact component={Bridal} />
                <Route path='/choreographers' exact component={Choreographer} />
                <Route path='/decorators' exact component={Decorators} />
                <Route path='/dj' exact component={Dj} />
                <Route path='/makeupartist' exact component={Makeup} />
                <Route path='/mehandi' exact component={Mehandi} />
                <Route path='/venues' exact component={Venues} />
                <Route path='/about' exact component={About} />
                <Route path='/termsofservice' exact component={Service} />
                <Route path='/contactus' exact component={Contact} />
                <SimpleReactLightbox><Route path='/vendorprofile' exact component={isLogged ? VendorProfile :Login } /></SimpleReactLightbox>
                

            </Switch>
        </section>
    )
}

export default Body
