import React from 'react';
import { BrowserRouter, Route,  } from 'react-router-dom';

import AdminManagePeople from '../admin/AdminManagePeople';
import AdminManageClasses from '../admin/AdminManageClasses';

function AdminRoutes() {
    return (
        <BrowserRouter>
            <Route exact path='/admin/pessoas' component={AdminManagePeople}/>
            <Route path='/admin/turmas/:page?' component={AdminManageClasses}/>
        </BrowserRouter>
    );
}

export default AdminRoutes;