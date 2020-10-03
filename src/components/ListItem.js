import React, { Component } from "react";
import "./ListItem.scss";
class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ''
        }
        this.onHandleClick = this.onHandleClick.bind(this);
    }
    onHandleClick() {
        this.props.onClickX(this.props.listID);
    }
    render() {
        return (
            <li className="ListItem">
                <span>
                    <input id={`listItem_${this.props.listID}`} type="checkbox" />
                    <label htmlFor={`listItem_${this.props.listID}`}>{this.props.value}</label>
                </span>
                <button onClick={this.onHandleClick}>X</button>
            </li>
        );
    }
}

export default ListItem;
