import React from 'react';
import '../App.css';

const BasicList: React.FC = () => {
    return (
        <div style={{ width: '25vw', margin: 'auto', textAlign: 'center' }}>
            <h4>{'Some web development tools/concepts:'}</h4>
            <ul>
                <li>{'Frontend'}</li>
                <li>{'Backend'}</li>
                <li>{'Relational Database'}</li>
                <li>{'MVC'}</li>
                <li>{'RESTful APIs'}</li>
                <li>{'Ruby on Rails'}</li>
                <li>{'Go'}</li>
            </ul>
        </div>
    );
};

export default BasicList;
