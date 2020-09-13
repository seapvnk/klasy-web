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
                        id: 1,
                        username: "Typescript GOD", 
                        bio: "Teaching typescript since 1999",
                        type: "Professor",
                    },
                    {
                        id: 2,
                        username: "seapvnk", 
                        bio: "Keep failing...",
                        type: "Aluno",
                    },
                    {
                        id: 3,
                        username: "jsIsBad", 
                        bio: "idk, just here 'cause js is bad",
                        type: "Aluno",
                    },
                    {
                        id: 4,
                        username: "Jannet Doe", 
                        bio: "React teacher! I love to learn & code",
                        type: "Professor",
                    },
                ]}
            />           
        </AdminPage>
    );
}

export default AdminManagePeople;