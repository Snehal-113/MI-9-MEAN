import React from 'react'
class Counter extends React.Component{
    frmtStyle={
        fontSize:20}
        frmtStylee={
            fontSize:20
        }
        constructor(props){
        super(props);
        this.state={count : 0 };
        this.handleCountAdd = this.handleCountAdd.bind(this);
        this.handleCountRem= this.handleCountRem.bind(this);
    }
    zero(){
        alert ("Count can't go below zero");
        return 0;
    }
    handleCountAdd(){
        this.setState({count:this.state.count+1});
    }
    handleCountRem(){
        this.setState({count:this.state.count -1 < 0 ? this.zero() : this.state.count -1  });
    }
    returnValue(){
        const {count} = this.state;
        if(count <= 0)
        return "0";
        else
        return count;
    }
    render(){
        let class_data = this.state.count<=0?"badge badge-warning" :"badge badge-secondary";
        return(
            <div>
                <hr/>
                <button className="btn btn-primary" onClick={this.handleCountAdd}> Increment</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span style ={this.frmtStyle} className={class_data}>
                <b>{this.returnValue()}</b></span> &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn btn-primary" onClick={this.handleCountRem}>Decrement </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br/><br/>
            <p><b>Number of Items :
                <span style ={this.frmtStylee} className={class_data}>{this.returnValue()}</span>
            </b></p>
            <hr/>
            </div>
        )
    }
}
export default Counter;