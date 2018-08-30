import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import Input from "../presentational/input";
import Tabs from "../presentational/tab";
import Lists from "../presentational/list";
import { reducer } from "./reducer.js";

/*Redux*/
let store;
let InitializeState = {
    list:[],
    value: "",
    display:"All"
};

/*Initialize the state storage space of Redux */
store=createStore(reducer,InitializeState);

class TodoListContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleAddList = this.handleAddList.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeInputeValue = this.changeInputeValue.bind(this);      
        this.handleDel = this.handleDel.bind(this); 
        this.handleListState = this.handleListState.bind(this);
        this.handleDisplayState = this.handleDisplayState.bind(this);
    }

    /*---Connect React and Redux---*/
    /*Register Observer Events Observe the Redux store*/
    componentDidMount(){
        this.unsubscribe=store.subscribe(this.update.bind(this));
    }
    /*Cancel observer event*/
    componetWillUnmount(){
        this.unsubscribe();
    }
    /*If redux changes back to the latest state */
    update(){
        this.setState(store.getState());
    }

    /*---Handle todolist---*/
    changeInputeValue(e){
        store.dispatch({
            type:"CHANGE_INPUTE_VALUE",
            value: e.currentTarget.value
        });
    }
    handleAddList(){
        if(!this.state.value.trim()){
            alert("請輸入文字");
        } else {
            let lists = this.state.list.slice();
            let listDetail = {
                active:true,
                content:this.state.value
            };
            lists.push(listDetail);
            store.dispatch({
                type:"ADD_LIST",
                list: lists,
                value: ""
            });
        }
    }
    handleSubmit(e){
        e.preventDefault();
    }
    handleDel(e){
        let thisList = e.currentTarget.parentNode.id;
        let lists = this.state.list.slice();
        lists.splice(thisList, 1);
        store.dispatch({
            type:"DEL_LIST",
            list: lists,
        });
    }
    handleListState(e){
        let lists = this.state.list.slice();
        let thisList = e.currentTarget.parentNode.id;
        let thisActive = lists[thisList].active;
        lists[thisList].active = !thisActive;
        store.dispatch({
            type:"ListState",
            list: lists,
        });
    }
    handleDisplayState(e){
        let thisState = e.currentTarget.innerHTML;
        store.dispatch({
            type:"DisplayState",
            display: thisState
        });
    }

    render() {
        
        /*TODO:
        Display a list of the current tab status.
        */
        let displayList = this.state.list.filter(list => {
            let display = this.state.display;

            if(display === "Active"){
                return list.active === true;
            }else if(display === "Completed"){
                return list.active === false;
            }else{
                return list;
            }
        });
        
        return (
            <div id="todolist_content">
                <h1>TO DO LIST</h1>                 
                <Input
                    handleSubmit={this.handleSubmit}
                    changeInputeValue={this.changeInputeValue}
                    handleAddList={this.handleAddList}
                    value={this.state.value}
                />
                <Tabs 
                    display={this.state.display}
                    handleDisplayState={this.handleDisplayState}
                />
                <Lists 
                    list={displayList}
                    handleDel={this.handleDel}
                    handleListState={this.handleListState}
                /> 
            </div>
          
        );
    }
}




export default TodoListContainer;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<TodoListContainer />, wrapper) : false;


