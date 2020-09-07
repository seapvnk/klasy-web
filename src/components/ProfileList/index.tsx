import React, { useState, useEffect } from 'react';
import ProfileCard, { ProfileCardProps } from '../ProfileCard';
import PaginationList from '../PaginationList';

interface ProfileListProps {
    profiles: Array<ProfileCardProps>;
    numberOfPages: number;
}

const ProfileList: React.FC<ProfileListProps> = ({ profiles, numberOfPages }) => {
    const [profilesData, setProfileData] = useState(profiles);
    const [removedProfile, setRemovedProfile] = useState(-1);
    const onRemove = (id: number) => {
        setRemovedProfile(id);
    }
    
    
    useEffect(() => {
        setProfileData(profilesData.filter((profile) => profile.id !== removedProfile))
    }, [ removedProfile ] );

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
                            onRemove={() => onRemove(id)}
                        />
                    )
                })
            }
        </PaginationList>
    );
} 

export default ProfileList;