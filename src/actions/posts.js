import * as api from '../api'

const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch( { type: 'FETCH_POSTS', payload: data })
    } catch (err) {
        console.log(err.message);
    }

}

export default getPosts;
