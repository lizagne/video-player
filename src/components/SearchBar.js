import React, { Component } from 'react'; //this is helping us tranlsate JSX into the HTML and JS then into the DOM

//import React and pull off the variable of Component from react library.

//A functional component, this is currently a functional component, info goes in and result comes out. This is a dumb component, doesn't have the ability to be aware or communicate with other components.

//a class based component, internal record keeping, data, aware of itself, and what it's doing. Input needs to have introspection.

//needs the ability to be aware.

//definte a new class called Searchbar and give it access to all the functionality that React.Component has. 

//We have to define a render method/function
class SearchBar extends Component {
	render() {
		return <input onChange={ event => console.log(event.target.value) }/>;
	}

	//create a method for the event handler. Good to call it starting with on or handle, then the name of the element so Input, then what is going to happen so onInputChange:

	//Whenever the input changes run this code inside the curly braces

	//pass the event handler to the element that we want to change..this has to be called with the event object, describes the context or the information about what occurred.

	// onInputChange(event) {
	// 	console.log(event.target.value); //getting access to the input value as it changes
	// }

	//we can refactor the event handler into one line inside the onChange method above

}

export default SearchBar;














