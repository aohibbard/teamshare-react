export default function projectReducer(
    state = {
        loading: false,
        projects: []
    }, action){
        switch(action.type){
            case 'LOAD_PROJECTS':
                return {
                    ...state,
                    projects: [...state.projects],
                    loading: true
                };
            case 'FETCH_PROJECTS':
                return{
                    ...state,
                    projects: action.projects,
                    loading: false
                }
            default:
                return state;
    }
}
