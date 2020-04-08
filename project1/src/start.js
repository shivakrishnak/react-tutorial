import React, { createElement } from 'react';
import ReactDOM from 'react-dom';

import { App } from './app';

//ReactDOM.render(WHAT, WHERE);
ReactDOM.render(createElement(App, null,null), document.getElementById('contents'));
