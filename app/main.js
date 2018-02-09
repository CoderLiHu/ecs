//import React,{Component} from 'react';
var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass =  require('create-react-class');
import {AppContainer} from 'react-hot-loader'
//var styles = require('./css.css')
/*var Demo = React.createFactory({
    render:function(){
        return React.DOM.div({class:'demo'}," I'm a " + this.props.name + " !")
    }
})*/



import Demo from './component/demo';
import Demo1 from './component/demo2';
import FetchTest from './component/test';
import text from './text.js'
//ReactDOM.render(React.createElement('div',{className:'demo'},text.name),document.getElementById('root'));
//ReactDOM.render(<Demo1/>,document.getElementById('root'));


ReactDOM.render(<AppContainer><FetchTest/></AppContainer>,document.getElementById('demo'));

if (module.hot) {
    module.hot.accept();
}