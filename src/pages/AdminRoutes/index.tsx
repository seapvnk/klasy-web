import React from 'react';
import { BrowserRouter, Route,  } from 'react-router-dom';

import AdminHome from '../admin/AdminHome';
import AdminManagePeople from '../admin/AdminManagePeople';
import AdminManageClasses from '../admin/AdminManageClasses';

function AdminRoutes() {
    return (
        <BrowserRouter>
            <Route exact path='/admin' component={AdminHome}/>
            <Route exact path='/admin/pessoas' component={AdminManagePeople}/>
            <Route exact path='/admin/turmas' component={AdminManageClasses}/>
        </BrowserRouter>
    );
}

export default AdminRoutes;