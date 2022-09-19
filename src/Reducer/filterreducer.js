const intialstate={
    items:"All Items"
}

export default function filterreducer(state=intialstate,action){
    const {type,payload}=action;
    switch(type){
        case "SETFILTER":
            return {...state,items:payload}
        case "RESETFILTER":
            return {...state,items:"All Items"}
        default:
            return state        
    }
}