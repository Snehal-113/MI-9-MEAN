import React from  "react";
class CounterClass extends React.Component {
  //  state = {count:0};    frmtStyle={  fontSize : 20  };
  constructor(props) {
    super(props);
    this.state={count:0,items:[]};
    this.handleCount=this.handleCount.bind(this);
  }


 handleCount() {
    this.setState(prevState=>({count:prevState.count+1}));
    console.log(this.state.count);
  }

  //same functionality without constructor and bind method
  returnValue(){
      const { count } = this.state;
      return count === 0 ? "-" : count;
  }
    handleCount = () => {
    this.setState({count : this.state.count+1});
    console.log(this.state.count);
  }

  

  returnBadgeValue(){
    let class_date = this.state.count === 0 ? "badge badge-warning" :"badge badge-secondary";
     return class_date;
  }


  handleCount1 = () => {
    this.setState({count : this.state.count-1});
    console.log(this.state.count);
  }

  
  returnItemList(){
    if(this.state.items.length===0) return "No element";
  else return this.state.items.map(items=><li key={items}>{items}</li>);
  }
  render() {

    //let class_date = this.state.count === 0 ? "badge badge-warning" :"badge badge-secondary";
    return(
      <div>
      <button  className="btn btn-primary m-3 btn-sm" onClick={this.handleCount}>Increment</button>
      &nbsp;&nbsp;

      
    
      <span style={this.frmtStyle} className={this. returnBadgeValue()}>
      <b>{this.returnValue()}</b></span>
      <button  className="btn btn-primary m-3 btn-sm" onClick={this.handleCount1}>Decrement</button>
      <h3>item selected  {this.state.count}</h3>

      <ul>
        {this.returnItemList()}
      </ul>
    
      </div>

    );
  }
}
export default CounterClass;
