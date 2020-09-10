import React from 'react';
import Profile from '../../utils/Profile';

interface ProfileBadgeProps {
    type: Profile;
}

const ProfileBadge: React.FC<ProfileBadgeProps> = ({ type }) => {
    let typeName, profileBadgeStyle;
    
    switch (type) {
        case Profile.Student:
            typeName =  'aluno';
            profileBadgeStyle = 'bg-primary text-light';
            break;
        case Profile.Professor:
            typeName =  'professor';
            profileBadgeStyle = 'bg-success text-light';
            break;
        case Profile.Admin:
            typeName =  'adm';
            profileBadgeStyle = 'bg-dark text-light';
            break;
        default:
            typeName =  'desconhecido';
            profileBadgeStyle = '';
    }

    return <span className={`chip ${profileBadgeStyle}`}> {typeName} </span>
}

export default ProfileBadge;