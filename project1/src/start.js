import React, { createElement } from 'react';
import ReactDOM from 'react-dom';

import { App } from './app';
import AppProp from './appproperties';

//ReactDOM.render(WHAT, WHERE);
//ReactDOM.render(createElement(App, null, null), document.getElementById('contents'));

ReactDOM.render(createElement(AppProp, {size: 9}, null), document.getElementById('contents'));