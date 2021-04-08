import React from 'react';
class Counter extends React.Component{
    constructor(prop){
        super(prop);
        this.state={count:0};
    }
    zero=()=>{
        alert("count con't go below zreo");
        return 0;
    }
    handleCountInc=()=>{
        this.setState ({count :this.state.count+1});
    }
    handleCountDec=()=>{
        this.setState({count:this.state.count -1 < 0 ? this.zero() : this.state.count -1  });
    }
    returnValue=()=>{
        const {count} = this.state;
        if(count <= 0)
            return 0;
        else
            return count;
    }
    render(){
        return(
            <div>
                <form>
                    <fieldset>
                        <legend> Increment & Decrement</legend>
                            <button type="button" onClick={this.handleCountInc}>Inscrement</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <b>{this.returnValue()} </b>&nbsp;&nbsp;&nbsp;&nbsp;
                            <button type="button" onClick={this.handleCountDec}>Decrement</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br>
                            <b>Select Items are :
                                {this.returnValue()}
                            </b>
                    </fieldset>
                </form>
            </div>
        );       
    }
}
export default Counter;