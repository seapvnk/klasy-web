import React, { useEffect } from 'react';
import { useState } from 'react';

import AdminPage from '../../../components/AdminPage';
import AdminSearchBar from '../../../components/AdminSearchBar';
import ProfileList, { UserProps } from '../../../components/ProfileList';
import getProfiles from './getProfiles';

function AdminManagePeople() {
    const [profiles, setProfiles] = useState(new Array<UserProps>());
    
    useEffect(() => {
        getProfiles(setProfiles);
        
    }, [profiles]);

    return(
        <AdminPage adminSection="Pessoas">
            <AdminSearchBar />
            <ProfileList
                profiles={profiles}
                numberOfPages={3}
            />
        </AdminPage>
    );
}

export default AdminManagePeople;