//import React,{Component} from 'react';
var React = require('react');

var Demo = React.createClass({
    render:function(){
        return React.DOM.div({class:'demo'}," I'm a " + this.props.name + " !")
    }
})

ReactDOM.render(React.createElement(Demo,{name:'demo'}),document.getElementById('root'));