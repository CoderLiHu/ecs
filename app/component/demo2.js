import React,{Component} from 'react';
import styles from './demo1-m.css'
//var styles = require('../css.css')
import Demo from './demo'
class Demo1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            value:1
        }
    }
    HHclick = ()=>{
        this.setState({
            value:this.state.value + 1,
        })
    }
    render(){
        return (
            <div className={styles.demo2}>Demo
                <a onClick={this.HHclick}>{this.state.value}</a>
                <Demo/>
            </div>
        )
    }
}

export default Demo1;