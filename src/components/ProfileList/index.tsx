import React, { useState, useEffect } from 'react';
import ProfileCard  from '../ProfileCard';
import PaginationList from '../PaginationList';
import Profile from '../../utils/Profile';
import { updateOperationDeleteProfile, updateOperationEditProfile } from './updateFunctions';
import UpdateOperation from '../../utils/UpdateOperation';
import api from '../../services/api';

interface UserProps {
    id: number;
    name: string;
    username: string;
    bio: string; 
    type: string;
}

interface ProfileListProps {
    numberOfPages: number;
    profiles: Array<UserProps>;
}


const ProfileList: React.FC<ProfileListProps> = ({ profiles, numberOfPages }) => {
    const [profilesData, setProfileData] = useState(profiles);
    const [operation, setOperation] = useState(UpdateOperation.noOperation);
    const [operationData, setOperationData] = useState({
        username: '',
        type: Profile.Unknown,
        bio: '',
        id: -1,
    });
    
    // Update functions
    const deleteProfile = updateOperationDeleteProfile(setOperation, setOperationData);    
    const editProfile = updateOperationEditProfile(setOperation, setOperationData);    
    
    useEffect(() => {
        // Check for deletions.
        if (operation === UpdateOperation.Delete) {
            setProfileData(profilesData.filter((profile: UserProps) => profile.id !== operationData.id));
        }
        
        // Check for editions.
        if (operation === UpdateOperation.Edit) {
            setProfileData(profilesData.map((profile: UserProps) => {
                if (profile.id === operationData.id) {
                    profile.username = operationData.username;
                    profile.bio = operationData.bio;
                    const {id, username, bio} = operationData;
                    api.put('users', {id, username, bio});
                }
                return profile;
            }));
        }
        // Clear operation command.
        setOperation(UpdateOperation.noOperation);
    }, [ operation, operationData.bio, operationData.username, operationData.id, profilesData ] );

    return (
        <PaginationList link="Admin/Pessoas" numberOfPages={numberOfPages}>
            {
                profilesData.map( ({ id, username, bio, type }) => {
                    return (
                        <ProfileCard
                            id={id}
                            key={id}
                            username={username}
                            bio={bio}
                            type={type}
                            onRemove={() => deleteProfile(id)}
                            handleEdit={editProfile}
                        />
                    )
                })
            }
        </PaginationList>
    );
} 
export type {UserProps};
export default ProfileList;