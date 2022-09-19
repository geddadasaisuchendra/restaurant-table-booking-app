const intialstate = []

export default function orderreducer(state=intialstate,action){
    const {type,payload}=action;
    switch(type){
        case "ADDORDER":
            return [...state,payload]
        default:
            return state
    }
}