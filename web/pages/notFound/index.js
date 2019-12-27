import React from 'react';

import style from './index.scss';

export default function NotFound() {
  return (
    <div className="container">
      <p className={style['not-found']}>404</p>
    </div>
  );
}
