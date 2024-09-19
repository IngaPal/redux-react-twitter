import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

const Body: React.FC = () => {
    return (
        <div className='body'>
            <Sidebar />
            <Content />
        </div>
    );
};

export default Body;