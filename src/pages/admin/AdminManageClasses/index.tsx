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
                        id: 1,
                        title: "React & Typescript", 
                        subtitle: "Learn React & Typescript",
                        description: "Coding React with Typescript.",
                    },
                    {
                        id: 2,
                        title: "Typescript the right way", 
                        subtitle: "Practice typescript",
                        description: "Know typescript fundamentals.",
                    },
                    {
                        id: 3,
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