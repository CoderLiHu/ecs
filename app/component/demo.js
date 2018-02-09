import React,{Component} from 'react';
import styles from './demo-m.css'
//var styles = require('../css.css')
class Demo extends Component{
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
            <div className={styles.demo1}>Demo,Hello!Hello!  HOT??
                <a onClick={this.HHclick}>{this.state.value}</a>
            </div>
        )
    }
}

export default Demo;