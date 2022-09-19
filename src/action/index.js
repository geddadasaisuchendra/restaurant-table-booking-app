export const settablenumber = (value)=> async dispatch =>{
     dispatch(
        {
            type:"SETTABLENUMBER",
            payload:value
        }
     )

}

export const resettablenumber = ()=> async dispatch =>{
    dispatch(
       {
           type:"RESETTABLENUMBER"
       }
    )

}

export const setfilter=(value)=> async dispatch =>{
    dispatch(
        {
            type:"SETFILTER",
            payload:value
        }
    )
}

export const resetfilter = ()=> async dispatch =>{
    dispatch(
       {
           type:"RESETFILTER"
       }
    )

}

export const addorder =(id,url,name,prize,tablenumber)=> async dispatch =>{
    dispatch(
        {
            type:"ADDORDER",
            payload:{
            id:id,
            url:url,
            name:name,
            prize:prize,
            tablenumber:tablenumber
            }
       }
    )
}

