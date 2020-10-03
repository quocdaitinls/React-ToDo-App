import React, { Component } from "react";
import "./ListToDo.scss";
import ListItem from "./ListItem";

class ListToDo extends Component {
    constructor(props) {
        super(props);
        this.onClickX = this.onClickX.bind(this);
    }
    onClickX(i) {
        this.props.delItem(i);
    }
    render() {
        const listItem = this.props.listItem.map((item) => (
            <ListItem
                key={item.id}
                listID={item.id}
                value={item.value}
                onClickX={this.onClickX}
            />
        ));
        return <ul className="ListToDo">{listItem}</ul>;
    }
}

export default ListToDo;
