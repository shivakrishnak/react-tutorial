import React, { Component, createElement } from 'react';

export default class AppProp extends Component {
    constructor(props){
        super(props);
        const size = props.size;
        this.state = {
            values: Array.from(Array(size),(ignore, index) => index +1)
            
        };
    }


    render(){
        const numbers = this.state.values.map(number => 
             createElement("li", {key: number.toString()}, number));
        return createElement('div', null, createElement('h2',null,'Numbers'),
        createElement('ul', null, numbers));
    }
}