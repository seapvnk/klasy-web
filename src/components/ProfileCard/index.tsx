import React from 'react';
import AdminUserOptionsModal from '../AdminUserOptionsModal';
import ProfileBadge from '../ProfileBadge';

import handleProfileType from './handleProfileType';
import handleAPIGender from './handleAPIGender';
 
interface ProfileCardProps {
    username: string;
    type: string;
    bio: string;
    gender?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ username, type, bio, gender }) => {
    
    const profileTileStyle = {
        backgroundColor: '#fff',
        borderRadius: '4px',
        border: '1px solid #33333333',
        padding: '10px',
        margin: '1.5rem 0px',
    }

    const profileType = handleProfileType(type);

    const nameInitials = username.split(' ').map(name => name.charAt(0)).join('');
    const profilePicAPI = 'https://avatars.dicebear.com/api';
    const profilePicAPIGender = handleAPIGender(gender ?? 'X');
    const profilePicAPIName = username.replace(' ', '-');
    const userProfileURL = `${profilePicAPI}/${profilePicAPIGender}/${profilePicAPIName}.svg`;

    return (
        <div style={profileTileStyle} className="tile">
            <div className="tile-icon">
                <div className="example-tile-icon">
                    <figure className="avatar avatar-xl bg-gray" data-initial={nameInitials}>
                        <img 
                            className="bg-gray"
                            src={userProfileURL} 
                            alt={profilePicAPIName}
                        />    
                    </figure>
                </div>
            </div>
            <div className="tile-content">
                <p className="tile-title">
                    <span className="text-bold">{ username }</span>
                    <ProfileBadge type={profileType} /> 
                </p>
                <p className="tile-subtitle">{bio}</p>
                <div className="tile-action">
                    <button className="btn btn-primary">Ver perfil</button>
                    <span style={{marginRight: '5px'}}></span>
                    <AdminUserOptionsModal 
                        username={username}
                        bio={bio}
                        profilePictureURL={userProfileURL}
                        nameInitials={nameInitials}
                        adorn={( <ProfileBadge type={profileType} /> )}
                    />
                </div>
            </div>
            <div className="divider"></div>
        </div>
    );
}

export type { ProfileCardProps };
export default ProfileCard;