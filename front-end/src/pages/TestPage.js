import React, { Component } from 'react';

class TestPage extends Component {
    a = "123"
    search = "http://xyz/"+this.a
    src="http://xyz/"+this.a

    ww = () =>{
    console.log(this.src);
    }

    render(){
        return(
            <div>
                <h1> Test Page </h1>
                {this.ww()}
            </div>
        )
        }
}
export default TestPage