import UpdateOperation from '../../utils/UpdateOperation';

const updateOperationDeleteClass = (setOp: Function, setData: Function) => {
    return (id: number) => {
        setOp(UpdateOperation.Delete);
        setData({id, title: '', subtitle: '', description: ''});
    }
}

const updateOperationEditClass = (setOp: Function, setData: Function) => {
    return (id: number, title: string, subtitle: string, description: string) => {
        setOp(UpdateOperation.Edit);
        setData({id, title, subtitle, description});
    }
}

export {updateOperationDeleteClass, updateOperationEditClass};