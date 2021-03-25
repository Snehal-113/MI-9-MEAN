import React from 'react'
class CounterItem extends React.Component{
    frmtStyle={
        fontSize:30}
        frmtStylee={
            fontSize:20
        }
        constructor(props){
        super(props);
        this.state={count : 0 };
        this.handleCountAdd = this.handleCountAdd.bind(this);
        this.handleCountRem= this.handleCountRem.bind(this);
    }
    handleCountAdd(){
        this.setState({count:this.state.count+1});
    }
    handleCountRem(){
        this.setState({count:this.state.count-1});
    }
    returnValue(){
        const {count} = this.state;
        if(this.state.count < 0)
        return "0 Max limit is zero";
        else if(this.state===0)
        return ("0 ") 
        else return count;
    }
    render(){
        let class_data = this.state.count<=0?"badge badge-warning" :"badge badge-secondary";
        return(
            <div>
                <button className="btn btn-primary" onClick={this.handleCountAdd}>Add Item</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn btn-primary" onClick={this.handleCountRem}>Remove Item</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span style ={this.frmtStyle} className={class_data}>
                <b>{this.returnValue()}</b></span>
            <p><b>Selected Items are :<span style ={this.frmtStylee} className={class_data}>
        {this.returnValue()}</span></b></p>
            </div>
        )
    }
}
export default CounterItem;

