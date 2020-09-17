import UpdateOperation from '../../utils/UpdateOperation';
import Profile from '../../utils/Profile';
import api from '../../services/api';

const updateOperationDeleteProfile = (setOp: Function, setData: Function) => {
    return (id: number) => {
        setOp(UpdateOperation.Delete);
        setData({id, username: '', type: Profile.Unknown, bio: ''});
    }
}

const updateOperationEditProfile = (setOp: Function, setData: Function) => {
    return (id: number, username: string, bio: string) => {
        setOp(UpdateOperation.Edit);
        api.put('users', {id, username, bio});
        setData({id, username, bio, type: Profile.Unknown});
    }
}

export {updateOperationDeleteProfile, updateOperationEditProfile};
