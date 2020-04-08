import { Component, createElement } from 'react';

export class App extends Component {
    render(){
        //return "hello React";
        return createElement('div', null, createElement('h2', null, 'Hello React from Create Element'));
    }
}