export default (state = {}, action)=>{
    console.log(`authReducer is firing`)
    if (action.type === 'signup'){
        //I care about this action!
        console.log(action)
        try{
            console.log(action.payload)
            return action.payload.data
        }
        catch{
        }
    }
    else if(action.type === 'logout'){
        return{}
    }
    else if(action.type==='login'){
        return action.payload.data
    }
    return state;
}