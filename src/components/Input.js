import React, { Component } from "react";
import "./Input.scss";
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };
        this.numberID = 0;
    }
    onInputChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit({
            id: ++this.numberID,
            value: this.state.value,
        });
    };
    inputOnKeyPress = (e) => {
        if (e.keyCode === 13) {
            this.onSubmit();
        }
    };
    clearAll = () => {
        this.numberID = 0;
        this.props.onFormSubmit({
            value: "clear all the task bellow !!!",
        });
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
                        maxLength={30}
                    />
                    <button type="submit">SUBMIT</button>
                </form>
                <button onClick={this.clearAll}>CLEAR ALL</button>
            </>
        );
    }
}
export default Input;
