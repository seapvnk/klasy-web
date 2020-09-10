import Profile from '../../utils/Profile';

const handleProfileType = (profileType: string) => {
    switch (profileType.toLowerCase()) {
        case 'aluno':
            return Profile.Student;
        case 'professor':
            return Profile.Professor;
        case 'admin':
            return Profile.Admin;
        default:
            return Profile.Unknown;
    }
}

export default handleProfileType;