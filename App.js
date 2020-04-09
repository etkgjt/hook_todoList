import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native'; 
import PropTypes from 'props-type';

import TodoList from './TodoList';

const toDo = [
  { id:1,title:'aaaaaaaaaaaa'},
  {id:2,title:'bbbbbbbbbbbbb'},
  {id:3,title:'cccccccccccccceee'},
  {id:4,title:'eeeeeeeeeeeeeeeeeeee'}
]

export default function App(){
  const [toDos,setTodo] = useState(toDo);
  function change(key){
    const newState = [...toDos];
    //let idx = toDo.indexOf({id:key});
    newState.splice(key,1);
    setTodo(newState);
  }
  return(
    <View style={styles.container}>
      <Text style={{fontSize:20,fontWeight:'bold'}}>This is todo List</Text>
       <TodoList todoList = {toDos} handleClick = {change}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    paddingTop : 200
  },

})
