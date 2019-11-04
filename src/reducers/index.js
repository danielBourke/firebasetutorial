const initialState = [];


export const postReducer =  (state= [], action) => {
    switch(action.type) {
        case "ADD_POST":
            return [
                ...state,
                action.post
            ];
            default:
                return state;
    }
}