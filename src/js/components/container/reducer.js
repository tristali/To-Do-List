export function reducer(state, action){
    switch(action.type){
    case "CHANGE_INPUTE_VALUE":
        return {value:action.value};

    case "ADD_LIST":
        return {
            list: action.list,
            value: action.value
        };
        
    case "DisplayState":
        return {display:action.display};

    case "DEL_LIST":
        return {list: action.list};
        
    case "ListState":
        return {list: action.list};

    default:
        return state;
    }
}