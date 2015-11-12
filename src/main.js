//  First we'll create references to the main React librry and the React-Dom library.
var React = require('react');
var ReactDOM = require('react-dom');

//  Now we'll handle imports, beginning with Redux.
//  Redux is a library we are using to handle our state mutations.
//  Read about it here: http://rackt.org/redux/docs/introduction/Motivation.html
import {createStore} from 'redux';
import {Provider} from 'react-redux';

//  Now we'll import our components, or for this evening our component.
import ExampleComponent from '../components/ExampleComponent.jsx';

//  Import test redux components
//import App from './app.jsx';
//import todoApp from '../reducers/reducers.jsx';

//  Create a store
//let store = createStore(todoApp);

//  I've kept this here to show how to use AJAX to connect with
//  and download JSON from an API, and then use that within our
//  component. Nothing new but it raises the question of where
//  these calls should live, within the primary source or within
//  the component that uses it.

//  Create an empty array to store weather data in
var conditions = [];

//  Get data from weather API
$.ajax({
    url : "http://api.wunderground.com/api/fc67a77a185d8e06/forecast10day/q/England/London.json",
    dataType : "jsonp",
    success : function(parsed_json) {
        //  Grab the JSON and put the data I want into an array
        conditions = parsed_json.forecast.simpleforecast.forecastday;
        //  Because AJAX is asynchronous we have to ensure the render method waits
        //  until we have our returned JSON. That's why I call this line.
        renderWithConditions(conditions, document.getElementById('rootNode'));
    }
});

//  React components can be in seperate files or within the primary source.
//  I always write them into classes and import them.

//  An in-line component
var SquareComp = React.createClass({
    render: function(){
        return (
            <p>An in-line component!</p>
        )
    }
});

//  Finally we call our primary render method.
//  This one is wrapped with a function becuase of the AJAX
//  request above. It would normally start with the:
//  ReactDOM.render( line.
function renderWithConditions(conditions, domElement) {
    ReactDOM.render(
            <div>   //  Always wrap everything in a single div, it makes your life easier.
                <h1>reactAthon 9000</h1>
                //  The ExampleComponent has several properties we need to pass through.
                <ExampleComponent location={'London'} weatherConditions={conditions[1].conditions} />
            </div>,
        domElement
    );
}