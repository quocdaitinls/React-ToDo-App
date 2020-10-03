import React, { Component } from "react";
import TitleReactTodo from "./components/TitleReactTodo";
import Input from "./components/Input";
import ListToDo from "./components/ListToDo";
import "./App.scss";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listTodo: [], // list gồm các object chứa id và thông tin
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.delItem = this.delItem.bind(this);
    }
    onFormSubmit(e) {
        let x =
            e.value === "clear all the task bellow !!!"
                ? []
                : [...this.state.listTodo, e];
        this.setState({
            listTodo: x,
        });
    }
    delItem(i) {
        let x = [...this.state.listTodo].filter(item => item.id !== i);
        this.setState({
            listTodo: x,
        });
    }
    render() {
        return (
            <div className="App">
                <TitleReactTodo />
                <Input onFormSubmit={this.onFormSubmit}/>
                <ListToDo
                    listItem={this.state.listTodo}
                    delItem={this.delItem}
                />
            </div>
        );
    }
}

export default App;
