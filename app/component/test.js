import React,{Component} from 'react';
import styles from './demo1-m.css'

class FetchTest extends Component{
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
        var url = "/downloadTXT";
        this.setState({
            loading:true,
        })

        fetch(url,{
            method:'GET',
            mode: 'cors',
            credentials: 'include',
            headers:{
                "Content-Type":'image/gif',
                "X-Requested-With":"XMLHttpRequest"
            },
            //body:JSON.stringify(query)
        })
            .then(response =>{
                if (response.status >= 200 && response.status < 300) {
                    return response
                } else {
                    var error = new Error(response.statusText)
                    error.response = response
                    throw error
                }})
            .then(res => res.blob()
                .then(blob => {
                    var a = document.createElement('a');
                    var url = window.URL.createObjectURL(blob); // 获取 blob 本地文件连接 (blob 为纯二进制对象，不能够直接保存到磁盘上)
                    var filename = res.headers.get('Content-Disposition');
                    a.href = url;
                    a.download = 'weixin_code.gif';
                    a.click();
                    window.URL.revokeObjectURL(url);
                    //document.querySelector('#status').innerHTML = '下载完成';
                    this.setState({
                        loading:false
                    })
                }))
            .catch(err=>{
                console.error(err)
                this.setState({
                    loading:false
                })
            });
    }
    render(){
        return (
            <div>
                <a onClick={this.HHclick}>{this.state.value}</a>
                <span>{this.state.loading ? 'loading...' : ''}</span>
            </div>
        )
    }
}

export default FetchTest;