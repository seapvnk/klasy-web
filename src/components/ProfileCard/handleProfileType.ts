import Profile from '../../utils/Profile';

const handleProfileType = (profileType: string) => {
    switch (profileType.toLowerCase()) {
        case 'estudante':
            return Profile.Student;
        case 'professor':
            return Profile.Professor;
        case 'administrador':
            return Profile.Admin;
        default:
            return Profile.Unknown;
    }
}

export default handleProfileType;