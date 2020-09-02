import React from 'react';

function ClassList(props: { children: React.ReactNode; }) {
    const classListStyle = {
        marginTop: '1rem',
        maxWidth: '100%',
    };

    return (
        <div style={classListStyle} className="container">
            {props.children}
        </div>
    );
}

export default ClassList;