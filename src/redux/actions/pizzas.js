import axios from 'axios'

export const setLoaded = (val) => ({
    type: 'SET_LOADED',
    payload: val,
});

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
});

export const fetchPizzas = () => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
        dispatch(setPizzas(data));
    });
};