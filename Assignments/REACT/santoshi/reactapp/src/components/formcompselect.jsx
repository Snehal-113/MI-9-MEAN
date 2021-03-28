import React from 'react';
class FormCompSelect extends React.Component {
    constructor(props){
        super(props);
        this.state = {value:""};
        this.handleSelectValue = this.handleSelectValue.bind(this);
        this.handleDisplayData = this.handleDisplayData.bind(this);    }
    handleSelectValue(e){
        this.setState({value:e.target.value})
    }
    handleDisplayData(e){
        alert("You have selected "+this.state.value);
        e.preventDefault();
    }
    render() {
        return ( <form>
            <fieldset>
            <label>List</label>
            <select value={this.state.value} onChange={this.handleSelectValue}>
                <option value="Apples">Apples</option>
                <option value="Grapes">Grapes</option>
                <option value="Mangoes">Mangoes</option>
            </select>
            </fieldset>
            <input type="submit" value="Submit" onClick={this.handleDisplayData}/>
        </form> );
    }
}export default FormCompSelect;