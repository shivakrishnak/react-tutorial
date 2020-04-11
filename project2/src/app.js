import React, { createElement, Component } from 'react';
import { render } from 'react-dom';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: []
        };
    }

    load(){
       this.setState({
           numbers: [1,2,3,4,5]
       })
    }

    increment(){
        let numbers = this.state.numbers;
        numbers =  numbers.map(val => val + 1);
        this.setState({numbers});
    }

    render() {
        const lines = this.state.numbers.map((number, index) =>
            createElement('li', { key: index.toString() }, number));
        return createElement('div', null, 
             createElement('button', { onClick: () => this.load()}, 'load'),
            createElement('span', null , ' '),
            createElement('button', { onClick: () => this.increment()}, 'increment'),
            createElement('ul', null, lines));
    }

}