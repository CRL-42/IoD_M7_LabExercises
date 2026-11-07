// Exercise 2.
import { useReducer, useEffect } from "react";

const initialState = {
    loading: false,
    data: '',
    error: '',
};

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_START':
            return {
                ...state,
                loading: true,
                error: '',
            };
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                data: action.payload,
                error: '',
            };
        case 'FETCH_ERROR':
            return {
                loading: false,
                data: '',
                error: action.payload,
            };
        default:
            return state;
    }
}

export function useData(url) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        console.log('running fetch');
        let ignore = false;
        dispatch({ type: 'FETCH_START'});

            fetch(url)
                .then(response => response.json())
                
                .then(data => {
                    if (!ignore) {
                        dispatch ({
                            type: "FETCH_SUCCESS",
                            payload: data
                        })
                    }
                })
                .catch(error => {
                    if (!ignore) {
                        dispatch({
                            type: "FETCH_ERROR",
                            payload: error.message
                        })
                    }
                });
            return () => {
                console.log('cleanup fetch');
                ignore = true;
            };
    }, [url])

    return state;
}
// Exercise 2 end.