import React, { Component } from "react";
import "./Input.scss";
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            click: 0,
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onInputChange(e) {
        this.setState({
            input: e.target.value,
        });
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.onFormSubmit(this.state.input);
    }
    inputOnKeyPress = (e) => {
        if (e.keyCode === 13) {
            this.onSubmit();
        }
    };
    clearAll = () => {
        this.props.onFormSubmit("clear all the task bellow !!!");
    };
    render() {
        return (
            <>
                <form className="InputForm" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name=""
                        id="inputArea"
                        onChange={this.onInputChange}
                        onKeyPress={this.inputOnKeyPress}
                        maxlength={30}
                    />
                    <button type="submit">SUBMIT</button>
                </form>
                <button onClick={this.clearAll}>CLEAR ALL</button>
            </>
        );
    }
}
export default Input;
