import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from './app/appRoot';

// 全量引入压缩后的next基础样式
import '@alifd/next/dist/next.min.css';

ReactDOM.render(<AppRoot />, document.getElementById('root'));
