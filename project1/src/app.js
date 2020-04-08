import { Component, createElement } from 'react';

export class App extends Component {
    constructor(props){
        super(props);
        //this.state = {location : 'World with state'};
        //setTimeout(() => this.changeState(), 5000);
        
        this.state = {count: 0 };
        setInterval(() => this.increment(), 1000);
    }

    increment(){
        const count = this.state.count + 1;
        this.setState({count})
    }

    changeState(){
        // DO NOT SET state directly in some other method. It can be only set in the constructor 
        //since we cannot modify state directly. It can be done through its Setter method
        //this.state = {location : 'Universe with state'}; 
        this.setState({location : 'Universe with state'});
    }

    render(){
        //return "hello React";
        
        /*
            createElement(component, properties, children);
        */
        //return  createElement('h2', null, 'Hello React from Create Element');
        //return createElement('div', null, createElement('h2', null, 'Hello React from Create Element'));
        //return createElement('div', null, createElement('span', { style: {color: 'red'}}, 'hello with properties'));
        

        /*
            State - to store state of a components - a variable
        */
        //return `hello ${this.state.location}`;
        //return createElement('span', null, createElement('span', null, 'Hello '), createElement('span', null, this.state.location));

        return this.state.count;
    }
}