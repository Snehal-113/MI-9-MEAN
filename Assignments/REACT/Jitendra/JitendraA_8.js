import React from 'react';
import ReactDOM from 'react-dom';
class EventClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { toggle: true };
        this.toggleFun = this.toggleFun.bind(this);
    }
    toggleFun() {
        this.setState(prevState => ({ toggle: !prevState.toggle }));
    }
    render() {
        return ( <
            button onClick = { this.toggleFun } > { this.state.toggle ? 'ON' : 'OFF' } < /button>
        )
    }
}
const comp = < EventClass / > ;
ReactDOM.render(comp, document.getElementById('header'));