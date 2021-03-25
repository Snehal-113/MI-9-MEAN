import React from 'react';
class RupeeConv extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value1:'',
            value2:'',
            convert:''
        }
        this.handle1=this.handle1.bind(this);
        this.handle2=this.handle2.bind(this);
        this.convert=this.convert.bind(this);
    }
handle1(event){
    this.setState({value1 : event.target.value1})
}
handle2(event){
    this.setState({value2 : event.target.value2})
}
convert(event){
    this.setState({convert:(parseInt(this.value1))/64})
    event.preventDefault();
}
    render(){
        return(
            <div>
                <div>
                <form>
                <label>Enter value</label>
                <input type="text" value1={this.state.value1} onClick={this.handle1} />&nbsp;
                <select onSelect={this.convert}>
                    <option>Dollar</option>
                    <option>Euro</option>
                    <option>Rial</option>
                    <option>Dinar</option>
                    <option>Shiling</option>
                </select>
                <input type="submit" value="convert" />&nbsp;
                <input type="text" value2={this.state.value2} onClick={this.handle2} />
                </form>
                {this.state.convert}
                </div>           
                 </div>
        );
    }
}
export default RupeeConv;
