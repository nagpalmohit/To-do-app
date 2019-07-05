import React,{Component} from 'react';
import { connect } from 'react-redux';
import TodoListComponent from "./todo-list.component";
import {checkItem,fetchPendingItems}from "./todo-list.actions";

// import styles from './styles';

const mapStateToProps = state => ({
    items:state.TodoReducer.items,
    pendingItems:state.TodoReducer.pendingItems
});

const mapDispatchToProps = dispatch => ({
    fetchPendingItems:()=>dispatch(fetchPendingItems()),
    checkItem:(key)=>dispatch(checkItem(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListComponent);