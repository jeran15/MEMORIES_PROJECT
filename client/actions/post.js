import * as api from '../api'

export const getPost = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data})//Fetch all methoda handle by fronend 
    } catch (error) {
        console.log(error.message)
    }
}