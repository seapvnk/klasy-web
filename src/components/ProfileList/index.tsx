import React, { useState, useEffect } from 'react';
import ProfileCard, { ProfileCardProps } from '../ProfileCard';
import PaginationList from '../PaginationList';
import Profile from '../../utils/Profile';
import { updateOperationDeleteProfile, updateOperationEditProfile } from './updateFunctions';
import UpdateOperation from '../../utils/UpdateOperation';

interface ProfileListProps {
    profiles: Array<ProfileCardProps>;
    numberOfPages: number;
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
            setProfileData(profilesData.filter(profile => profile.id !== operationData.id));
        }

        // Check for editions.
        if (operation === UpdateOperation.Edit) {
            setProfileData(profilesData.map(profile => {
                if (profile.id === operationData.id) {
                    profile.username = operationData.username;
                    profile.bio = operationData.bio;
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
                profilesData.map( ({ id, username, bio, type }, index) => {
                    return (
                        <ProfileCard
                            id={id}
                            key={index}
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

export default ProfileList;