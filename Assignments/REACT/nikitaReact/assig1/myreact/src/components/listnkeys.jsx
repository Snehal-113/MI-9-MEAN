import React from  "react";

class ListsnkeysComp extends React.Component {
    //state = {count :0,prd:['grap','apple','mango']};
    render() { 
        return ( <div>
            <ul>
            {this.state.prd.map(prd=><li>{prd}</li>)} 
            </ul>
        </div> );
    }
}


 
export default ListsnkeysComp;