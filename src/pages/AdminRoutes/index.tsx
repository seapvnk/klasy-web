import React from 'react';
import { BrowserRouter, Route,  } from 'react-router-dom';

import AdminHome from '../admin/AdminHome';
import AdminManagePeople from '../admin/AdminManagePeople';

function AdminRoutes() {
    return (
        <BrowserRouter>
            <Route exact path='/admin' component={AdminHome}/>
            <Route exact path='/admin/pessoas' component={AdminManagePeople}/>
        </BrowserRouter>
    );
}

export default AdminRoutes;