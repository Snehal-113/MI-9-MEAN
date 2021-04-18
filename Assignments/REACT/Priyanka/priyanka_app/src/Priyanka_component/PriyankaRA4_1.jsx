import React from 'react'
class RadioButton extends React.Component{
    render(){
        return(
            <div>
                <form>
                By using Radio buttons
                <br />
                <input type="radio" value="Palindrome" name="pri1"/>Palindrome
                <br />
                <input type="radio" value="Fibonacci" name="pri1"/>Fibonacci
                <br />
                <input type="radio" value="Factorial" name="pri1"/>Factorial
                <br />
                <input type="radio"  value="Armstrong" name="pri1" />Armstrong
                <br />
                <input type="button" value="show"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <br />
                <hr />
                </form>
            </div>
        )
        ;
    }
}
export default RadioButton