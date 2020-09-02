import React from 'react';

interface ClassItemProps {
    title: string;
    subtitle?: string;
    description?: string;
}

const ClassItem: React.FC<ClassItemProps> = ({ title, description, subtitle }) => {
    return (
        <div className="card" style={{maxWidth: '400px'}}>
            <div className="card-image" style={{maxWidth: '100%'}}>
                <img src="http://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="img-responsive" />
            </div>
            <div className="card-header">
                <div className="card-title h5">{ title }</div>
                <div className="card-subtitle text-gray">{ subtitle ?? '' }</div>
            </div>
            <div className="card-body">
                {description ?? ''}
            </div>
            <div className="card-footer">
                <button className="btn btn-primary"style={{marginRight: '5px'}}>Novo professor</button>
                <button className="btn btn-success">Opções</button>
            </div>
        </div>
    );
}

export default ClassItem;