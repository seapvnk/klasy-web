import React from 'react';

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
        padding: '10px',
        boxShadow: '6px 6px 6px 1px rgba(0,0,0,0.05)',
        margin: '1.5rem 0px',
    }

    const {username, bio, type} = props;
    const gender = props.gender?? 'X';
    const profileType = handleProfileType(type);

    const nameInitials = username.split(' ').map(name => name.charAt(0)).join('');
    const profilePicAPI = 'https://avatars.dicebear.com/api';
    const profilePicAPIGender = handleAPIGender(gender);
    const profilePicAPIName = username.replace(' ', '-');

    return (
        <div style={profileTileStyle} className="tile">
            <div className="tile-icon">
                <div className="example-tile-icon">
                    <figure className="avatar avatar-xl bg-gray" data-initial={nameInitials}>
                        <img 
                            className="bg-gray"
                            src={`${profilePicAPI}/${profilePicAPIGender}/${profilePicAPIName}.svg`} 
                            alt={profilePicAPIName}
                        />    
                    </figure>
                </div>
            </div>
            <div className="tile-content">
                <p className="tile-title"><span className="text-bold">{username}</span> {createProfileBadgeStyle(profileType)}</p>
                <p className="tile-subtitle">{bio}</p>
                <div className="tile-action">
                    <button className="btn btn-primary">Ver perfil</button>
                    <span style={{marginRight: '5px'}}></span>
                    <button className="btn">Opções</button>
                </div>
            </div>
            <div className="divider"></div>
        </div>
    );
}

export default ProfileCard;