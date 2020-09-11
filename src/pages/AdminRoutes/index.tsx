import React from 'react';
import { BrowserRouter, Route,  } from 'react-router-dom';

import AdminManagePeople from '../admin/AdminManagePeople';
import AdminManageClasses from '../admin/AdminManageClasses';
import AdminCreateAccess from '../admin/AdminCreateAccess';

function AdminRoutes() {
    return (
        <BrowserRouter>
            <Route exact path='/admin' component={AdminManagePeople}/>
            <Route exact path='/admin/acesso' component={AdminCreateAccess}/>
            <Route path='/admin/pessoas/:page?' component={AdminManagePeople}/>
            <Route path='/admin/turmas/:page?' component={AdminManageClasses}/>
        </BrowserRouter>
    );
}

export default AdminRoutes;