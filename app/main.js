//import React,{Component} from 'react';
var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass =  require('create-react-class');
//var styles = require('./css.css')
/*var Demo = React.createFactory({
    render:function(){
        return React.DOM.div({class:'demo'}," I'm a " + this.props.name + " !")
    }
})*/

import text from './text.js'
ReactDOM.render(React.createElement('div',{class:'demo'},text.name),document.getElementById('root'));

import Demo from './component/demo';
ReactDOM.render(<Demo/>,document.getElementById('demo'));