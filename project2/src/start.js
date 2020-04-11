import React, { createElement }  from 'react';
import ReactDom from 'react-dom';
import App from './app';


ReactDom.render(createElement(App, null, null), document.getElementById('contents'))