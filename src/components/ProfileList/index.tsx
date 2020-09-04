import React from 'react';
import ProfileCard, { ProfileCardProps } from '../ProfileCard';
import PaginationList from '../PaginationList';

interface ProfileListProps {
    profiles: Array<ProfileCardProps>;
    numberOfPages: number;
}

const ProfileList: React.FC<ProfileListProps> = ({ profiles, numberOfPages }) => {
    return (
        <PaginationList link="Admin/pessoas" numberOfPages={numberOfPages}>
            {
                profiles.map( (profile, index) => {
                    return (
                        <ProfileCard
                            key={index}
                            username={profile.username}
                            bio={profile.bio}
                            type={profile.type}
                            gender={profile.gender}
                        />
                    )
                })
            }
        </PaginationList>
    );
} 

export default ProfileList;