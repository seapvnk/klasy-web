import React from 'react';

import AdminPage from '../../../components/AdminPage';
import AdminSearchBar from '../../../components/AdminSearchBar';
import ProfileList from '../../../components/ProfileList';

function AdminManagePeople() {
    return(
        <AdminPage adminSection="Pessoas">
            <AdminSearchBar />
            <ProfileList
                numberOfPages={6}
                profiles={[
                    {
                        username: "Typescript GOD", 
                        bio: "Teaching typescript since 1999",
                        type: "Professor",
                    },
                    {
                        username: "seapvnk", 
                        bio: "Keep failing...",
                        gender: 'male',
                        type: "Aluno",
                    },
                    {
                        username: "jsIsBad", 
                        bio: "idk, just here 'cause js is bad",
                        type: "Aluno",
                    },
                    {
                        username: "Jannet Doe", 
                        bio: "React teacher! I love to learn & code",
                        gender: 'female',
                        type: "Professor",
                    },
                ]}
            />           
        </AdminPage>
    );
}

export default AdminManagePeople;