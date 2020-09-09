import React, { useState, useEffect } from 'react';
import ProfileCard, { ProfileCardProps } from '../ProfileCard';
import PaginationList from '../PaginationList';
import Profile from '../ProfileCard/profile';

interface ProfileListProps {
    profiles: Array<ProfileCardProps>;
    numberOfPages: number;
}

enum UpdateOperation {
    noOperation,
    Edit,
    Delete,
}


const ProfileList: React.FC<ProfileListProps> = ({ profiles, numberOfPages }) => {
    const [profilesData, setProfileData] = useState(profiles);

    const [operation, setOperation] = useState(UpdateOperation.noOperation);
    const [operationData, setOperationData] = useState({
        username: '',
        type: Profile.Unknown,
        bio: '',
        id: -1,
        gender: '?',
    });

    const deleteProfile = (id: number) => {
        setOperation(UpdateOperation.Delete);
        setOperationData({id, username: '', type: Profile.Unknown, bio: '', gender: '?'})
    }
    
    const editProfile = (id: number, username: string, bio: string) => {
        setOperation(UpdateOperation.Edit);
        setOperationData({id, username, bio, type: Profile.Unknown, gender: '?'});
    }

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
    }, [ operation ] );

    return (
        <PaginationList link="Admin/Pessoas" numberOfPages={numberOfPages}>
            {
                profilesData.map( ({id, username, bio, type, gender}, index) => {
                    return (
                        <ProfileCard
                            id={id}
                            key={index}
                            username={username}
                            bio={bio}
                            type={type}
                            gender={gender}
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