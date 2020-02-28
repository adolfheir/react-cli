import React from 'react';
import style from './index.scss';

const NotFound: React.FC = () => {
    return (
        <div className={style['not-found']}>
            <p>404</p>
        </div>
    );
};

export default NotFound;
