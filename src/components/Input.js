import React, { Component } from "react";
import './Input.scss'
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            click: 0
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onClickSubmit = this.onClickSubmit.bind(this);
    }
    onInputChange(e) {
        this.setState({
            input: e.target.value,
        });
    }
    onClickSubmit() {
        this.props.onFormSubmit(this.state.input);
    }
    
    render() {
        return (
            <div className="InputForm">
                <input
                    type="text"
                    name=""
                    id="inputArea"
                    onChange={this.onInputChange}
                    onKeyUp={this.inputOnKeyUp}
                />
                <button onClick={this.onClickSubmit}>SUBMIT</button>
            </div>
        );
    }
}
export default Input;
