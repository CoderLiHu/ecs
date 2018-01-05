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



ReactDOM.render(React.createElement('div',{class:'demo'},'hello react'),document.getElementById('root'));