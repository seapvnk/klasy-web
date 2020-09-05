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

export default handleAPIGender;