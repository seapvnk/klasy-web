import React from 'react';
import AdminUserOptionsModal from '../AdminUserOptionsModal';

enum ProfileType {
    Professor,
    Student,
    Admin,
    Unknown,
}

interface ProfileCardProps {
    username: string;
    type: string;
    bio: string;
    gender?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = props => {
    const handleAPIGender = (gender: string) => {
        const genderInitial = gender.charAt(0).toUpperCase();
        if (genderInitial === 'F') {
            return 'female';
        } else if (genderInitial === 'M') {
            return 'male';
        } else {
            return 'identicon';
        }
    }

    const handleProfileType = (profileType: string) => {
        switch (profileType.toLowerCase()) {
            case 'aluno':
                return ProfileType.Student;
            case 'professor':
                return ProfileType.Professor;
            case 'admin':
                return ProfileType.Admin;
            default:
                return ProfileType.Unknown;
        }
    }
    
    const createProfileBadgeStyle = (type: ProfileType) => {
        let typeName, profileBadgeStyle;
        
        switch (type) {
            case ProfileType.Student:
                typeName =  'aluno';
                profileBadgeStyle = 'bg-primary text-light';
                break;
            case ProfileType.Professor:
                typeName =  'professor';
                profileBadgeStyle = 'bg-success text-light';
                break;
            case ProfileType.Admin:
                typeName =  'adm';
                profileBadgeStyle = 'bg-dark text-light';
                break;
            default:
                typeName =  'desconhecido';
                profileBadgeStyle = '';
        }

        return <span className={`chip ${profileBadgeStyle}`}> {typeName} </span>
    }

    const profileTileStyle = {
        backgroundColor: '#fff',
        borderRadius: '4px',
        border: '1px solid #33333333',
        padding: '10px',
        margin: '1.5rem 0px',
    }

    const {username, bio, type} = props;
    const gender = props.gender?? 'X';
    const profileType = handleProfileType(type);

    const nameInitials = username.split(' ').map(name => name.charAt(0)).join('');
    const profilePicAPI = 'https://avatars.dicebear.com/api';
    const profilePicAPIGender = handleAPIGender(gender);
    const profilePicAPIName = username.replace(' ', '-');
    const userProfileURL = `${profilePicAPI}/${profilePicAPIGender}/${profilePicAPIName}.svg`;
    const profileAdorn = createProfileBadgeStyle(profileType);

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
                <p className="tile-title"><span className="text-bold">{username}</span> {profileAdorn}</p>
                <p className="tile-subtitle">{bio}</p>
                <div className="tile-action">
                    <button className="btn btn-primary">Ver perfil</button>
                    <span style={{marginRight: '5px'}}></span>
                    <AdminUserOptionsModal 
                        username={username}
                        bio={bio}
                        profilePictureURL={userProfileURL}
                        nameInitials={nameInitials}
                        adorn={profileAdorn}
                    />
                </div>
            </div>
            <div className="divider"></div>
        </div>
    );
}

export type { ProfileCardProps };
export default ProfileCard;