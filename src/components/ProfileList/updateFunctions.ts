import UpdateOperation from '../../utils/UpdateOperation';
import Profile from '../../utils/Profile';

const updateOperationDeleteProfile = (setOp: Function, setData: Function) => {
    return (id: number) => {
        setOp(UpdateOperation.Delete);
        setData({id, username: '', type: Profile.Unknown, bio: ''});
    }
}

const updateOperationEditProfile = (setOp: Function, setData: Function) => {
    return (id: number, username: string, bio: string) => {
        setOp(UpdateOperation.Edit);
        setData({id, username, bio, type: Profile.Unknown});
    }
}

export {updateOperationDeleteProfile, updateOperationEditProfile};
