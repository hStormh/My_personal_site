import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ... 其他导入 ...

console.log('index.tsx 已加载'); // 调试信息

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);