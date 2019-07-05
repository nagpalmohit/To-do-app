import {combineReducers} from "redux";
import TodoReducer from "./todo-reducer";
const RootReducer = combineReducers({
    TodoReducer
});
export default RootReducer;


//Store(State):
//{ ToDoReducer:{
//  item:[]}
//RemainderReducer:{
//   remainders:[]
//  }
//}
