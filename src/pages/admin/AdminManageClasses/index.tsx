import React from 'react';
import AdminPage from '../../../components/AdminPage';
import ClassList from '../../../components/ClassList';
import ClassesAdminMenu from '../../../components/ClassesAdminMenu';

function AdminManageClasses() {
    return(
        <AdminPage adminSection="Turmas">
            <ClassesAdminMenu />

            <ClassList
                numberOfPages={3}
                classes={[
                    {
                        title: "React & Typescript", 
                        subtitle: "Learn React & Typescript",
                        description: "Coding React with Typescript.",
                    },
                    {
                        title: "Typescript the right way", 
                        subtitle: "Practice typescript",
                        description: "Know typescript fundamentals.",
                    },
                    {
                        title: "C Basic to Advance", 
                        subtitle: "Learn C fundamentals",
                        description: "Learn C for desktop applications & embedded systems.",
                    },
                ]}
            />
                
        </AdminPage>
    );
}

export default AdminManageClasses;