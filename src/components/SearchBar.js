import React, { Component } from 'react'; //this is helping us tranlsate JSX into the HTML and JS then into the DOM

//import React and pull off the variable of Component from react library.

//A functional component, this is currently a functional component, info goes in and result comes out. This is a dumb component, doesn't have the ability to be aware or communicate with other components.

//a class based component, internal record keeping, data, aware of itself, and what it's doing. Input needs to have introspection.

//needs the ability to be aware.

//definte a new class called Searchbar and give it access to all the functionality that React.Component has. 

//We have to define a render method/function
class SearchBar extends Component {

	//only class based components can have state, and you create state by calling the constructor method with props on it and then initialise state. It's called first automatically, when we create a new instance of searchbar eg.

	constructor(props){
		super(props); //

		//this is initialising state, creating a new object and assign it to this.state. It will contain properties that we want to record. Term is short for Search term.
		this.state = {
			term: ''
		};//once the user starts typing we want to update the object and the properties inside it.

		//this is the only time that we manipulate state, when intialising it. Everywhere else, we use this.setState
	} 


	render() { //we should only ever manipulate the state with setState like this below: setState is a great and powerful method. We are recording state
 		return (

 			//input is now a controlled component
 			<div className="search-bar">
 				<input 
 					value = { this.state.term }
 					onChange={ event => this.setState({ term: event.target.value }) }/>
			</div>

			//we could reference the state in the JSX like this:
			//Value of the input: { this.state.term } it's calling the state, but with the event happening, which is the user typing in some text, then the state is set or changed with the method above, so it's live typing! 

		)
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














