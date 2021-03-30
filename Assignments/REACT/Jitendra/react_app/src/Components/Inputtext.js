import React from 'react';
class Inputfield extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: "", txtval: "Nothing is written"};
        this.handletxt = this.handletxt.bind(this);
        this.handleinput = this.handleinput.bind(this);

    }
    handletxt(event) {
        this.setState({ value: event.target.value });
    }
    handleinput(){
      this.setState({txtval:this.state.value});
    }


    render() {

        return (

            <div className = "part">
            <h1> Input Field Reader </h1> 
            <label > Type Something </label> 
            <input value = { this.state.value }onChange = { this.handletxt }/> 
            <button variant = "success"type = "button"onClick = { this.handleinput } > Show </button> 
            <div className = "curr" >
            <label > { this.state.txtval} </label> </div> 
            </div>
        )
    }
}
export default Inputfield;