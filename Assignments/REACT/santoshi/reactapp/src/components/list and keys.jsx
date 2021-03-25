import React from 'react';
class ListsnKeyComp extends React.Component {
    state = {numbers : [1,2,3,4] };
    render() {
        return( 
            <div>
                <ul>
        {this.state.numbers.map(numbers=><li key={numbers}>{numbers*3}</li>)} 
                </ul>
            </div>
             );
    }
}
export default ListsnKeyComp;