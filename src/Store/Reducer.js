import uuid from 'uuid'

const initialState = {
	age:21,
	array:[]
}


const Reducer = (state=initialState,action)=>{
 const newState = {...state}
 switch(action.type){
 	case "AGE_UP":
    return {
    	...newState,
    	age:newState.age + action.value,
    	array:newState.array.concat({id:uuid(),age:newState.age + action.value})
    }
  

  	case "AGE_DOWN":
  	return {
    	...newState,
    	age:newState.age - action.value,
    	array:newState.array.concat({id:uuid(),age:newState.age - action.value})
    }
    case "DEL_ITEM":
  	return {
    	...newState,
    	array:newState.array.filter(item =>item.id !== action.value)
    }
    default:
    return newState;
  }


}


export default Reducer;