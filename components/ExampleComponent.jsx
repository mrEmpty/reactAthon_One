//  As usual, import React
var React = require('react');
//  I like using console logs to track the logic
console.log('Weather component created');
//  Create a new class which extends the React Component class
class Weather extends React.Component {
    //  Create our constructor
    constructor(props) {
        //  super() here calls the root class your new component is inheriting from
        //  effectively calling the super's constructor, and passing our properties through to it.
        super(props);
        //  We then do a very React thing, and set the initial state of this component. State is important in React.
        this.state = {city: props.cityName, weather: props.weatherConditions};
    }

    //  We now call the render() function
    render() {
        //  Styles without CSS! All the FE devs are killing cats right now. Not only no CSS, but in-line styles!
        //  Styles can be within the component, like here, or referenced as normal with a standard CSS file.
        var style = {
            WebkitBorderRadius : 20,
            MozBorderRadius: 20,
            BorderRadius : 20,
            padding : 10,
            backgroundColor : '#ECF0F1',
            width : 250,
            height : 450
        };

        // classes tend to 'return' stuff. In React classes of type component return the stuff that creates that component.
        return(
            <div style={style}>
                <h2>Weather Update</h2>
                <p>The weather tommorrow in {this.state.city}</p>
                <p>is most likely to be {this.state.weather}</p>
            </div>
        )
    }
}

//  Finally we set the property types this component needs and expects in order to work.
Weather.propTypes = {cityName: React.PropTypes.string, weatherConditions: React.PropTypes.string};
//  And we set default property values as a courtesy, so the app wont crash if the developer forgets
//  to send any props through when they instantiate the class.
Weather.defaultProps = {cityName: 'Default City', weatherConditions: 'Default Conditions'};

//  Export it all for us.
export default Weather;