import React,{Component}from 'react';
import {FlatList} from "react-native";
import TodoItem from './TodoItem'
export default class ListContainer extends Component{
    render(){
        return(
          <FlatList
                style={{flex:1}}
                data={this.props.items}
                keyExtractor={(data)=>data.key + ""}
                renderItem={({item})=> <TodoItem checkItem={(key)=>this.props.checkItem(key)} item={item}/>}/>
        );
    }
}