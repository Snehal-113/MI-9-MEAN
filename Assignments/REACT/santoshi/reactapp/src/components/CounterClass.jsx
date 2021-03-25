import React from 'react';
 
class CounterClass extends React.Component{
    state={
        count : 0
    };
    returnValue(){
        const {count} = this.state;
        //object destructruring
       /* let label;
        if(this.state.count == 0)
        label ="-"
        else
        label = this.state.count;
        return label;*/

        return count === 0?"-":count;
        
    }
    handleCount(){
        console.log("u have clicked");
} 
render()
{
    return(
        <div>
            <button onClick={this.handleCount()}>Increment</button>&nbsp;&nbsp;&nbsp;
            <span><b>{ this.state.count} </b></span>
            <span><b>{this.returnValue()}</b></span>
        </div>
    );
}
}
export default CounterClass ;