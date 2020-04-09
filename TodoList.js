import React from 'react';
import {
    View,
    FlashList,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
TodoList.PropTypes = {
    todoList : PropTypes.array,
    handleClick:PropTypes.func,
};
TodoList.defaultProps = {
    todoList:[],
    handleClick:null
}
export default function TodoList(props){
    const {todoList,handleClick} = props;
    function click(key){
        if(handleClick)   
            handleClick(key);
   }
    return (
        <View style={styles.container}>
            
            {
                todoList.map((item,index)=>{
                    return(
                        <TouchableOpacity style={styles.listItem} key = {item.id} onPress = {()=>{click(index)}}>
                            <Text>{item.title}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
    listItem:{
        
        height:50,
        margin:10,
        borderColor:'red',
        borderWidth:1,
    }
})