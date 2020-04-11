### React
- Update the DOM(Document Object Model)
- React uses virtual DOM

Babel - compiler
Webpack - build tool

> Put HTML into Javascript = React
> Put Javascript into HTML = Angular


##### Component
- a resuable piece of code - to render or display
- it is view with react element which get populated into real DOM
- component may have children
- it has state


##### Exporting Modules in Javascript
- Importing the modules 
- if we put "default" to a class/function - it can be exported like DEFAULT_ITEM 
- and if we dont put "default" to class/function, then it can be exported like { EXPORTED_ITEMS }
	Import DEFAULT_ITEM, { EXPORTED_ITEMS } from MODULE;
	
	
#### createElement
- Syntax:  
- Component
	-	createElement('div', null, 'hello');
	- 	div is a react component here
- Children
	-	createElement('div', null, createElement('span', null, 'hello'););
- Properties
	-	createElement('div', null, createElement('span', {{style : color : 'red' }}, 'hello'););
	

#### State
- We can keep state in the components
- State is useful if we have data that keeps changing. Just like object in Java
- State is internal to an object. It is kept inside the object. It changes with time and behaviour


#### Properties
- we will use if we want to send configuration data
- Like the color, size, units, currency
- Properties should be treated as immutable
