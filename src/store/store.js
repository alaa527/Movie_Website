import {createStore} from 'redux'
const initstate={
    FavMovies:[],
    value:0,
}

const FavReducer=(state=initstate,action)=>{
  
  
if(action.type==="addToFav"){
   return {...state, value:state.value += 1 ,
    FavMovies:state.FavMovies.concat(action.payload)}
 

}
else if(action.type==='removeFromFav'){

    var deleteditem= state.FavMovies.splice(action.payload,1)
   
    return  {...state, value:state.value >1?state.value-1: 0 ,
         FavMovies:state.FavMovies.filter(x => x !==deleteditem)}
}

return state

}
const store=createStore(FavReducer)

export default store;