import { UserProps } from "../../../components/ProfileList";
import api from "../../../services/api";

export default async function getProfiles(setData: Function) {
    const response = await api.get('users');
    setData(response.data.map((profile: UserProps) => {
        const {id, username, bio, type} = profile;            
        return {id, username, bio, type};
    }));
}