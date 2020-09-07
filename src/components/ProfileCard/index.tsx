import React, { useState } from 'react';
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

    // transform username in it's initials to create a placeholder in case of image fail to load
    const getInitials = ( name: string ) => name.split(' ').map(name => name.charAt(0)).join('');
    
    // Component states, mutable by edit functionality in AdminUserOptionsModal
    const [ profileUsername, setUsername ] = useState(username);
    const [ profileBio, setBio ] = useState(bio);
    const [ nameInitials, setNameInitials ] = useState(getInitials(profileUsername));

    // Handle editing
    type ProfileFormUpdate = any;
    
    function handleEditing( [ username, bio ]: ProfileFormUpdate  ) {
        setUsername(username);
        setBio(bio)
        setNameInitials(getInitials(profileUsername));
    }

    // Profile Picture request, according username.
    const profilePicAPI = 'https://avatars.dicebear.com/api';
    const profileType = handleProfileType(type);
    const profilePicAPIGender = handleAPIGender(gender ?? 'X');
    const userProfileURL = `${profilePicAPI}/${profilePicAPIGender}/${profileUsername}.svg`;

    return (
        <div style={profileTileStyle} className="tile">
            <div className="tile-icon">
                <div className="example-tile-icon">
                    <figure className="avatar avatar-xl bg-gray" data-initial={nameInitials}>
                        <img 
                            className="bg-gray"
                            src={userProfileURL} 
                            alt={profileUsername}
                        />    
                    </figure>
                </div>
            </div>
            <div className="tile-content">
                <p className="tile-title">
                    <span className="text-bold">{ profileUsername }</span>
                    <ProfileBadge type={profileType} /> 
                </p>
                <p className="tile-subtitle">{profileBio}</p>
                <div className="tile-action">
                    <button className="btn btn-primary">Ver perfil</button>
                    <span style={{marginRight: '5px'}}></span>
                    <AdminUserOptionsModal
                        formSubmit={{
                            submitFunction: handleEditing,
                            submitFunctionsArgs: ({ username: profileUsername, bio: profileBio }),
                        }}
                        username={profileUsername}
                        bio={profileBio}
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