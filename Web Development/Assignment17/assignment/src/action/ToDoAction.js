export const addToDo = (message) =>{
    return {
        type: "ADD_TODO",
        payload: message,
    }
}

export const deleteToDo = (id) =>{
    return {
        type: "DELETE_TODO",
        payload:  id,
    }
}

export const removeToDo = ({message,id}) =>{
    return {
        type: "REMOVE_TODO",
        payload:message,
        payload: id,
    }
}