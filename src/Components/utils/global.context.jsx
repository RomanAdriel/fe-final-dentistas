import axios from "axios";
import {createContext, useContext, useEffect, useReducer} from "react";


const DentistsStates = createContext();

export const initialDentistState = {
    theme: localStorage.getItem('theme') || "light",
    dentists: [],
    singleDentist: {},
    favorites: JSON.parse(localStorage.getItem('favorites')) || []
}



const dentistsReducer = (state, action) => {

    switch (action.type) {
        case 'GET_DENTISTS':
            return {
                ...state,
                dentists: action.payload
            }
        case 'GET_SINGLE_DENTIST':
            return {
                ...state,
                singleDentist: action.payload
            }
        case 'ADD_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]

            }
        case 'REMOVE_FAVORITE':
            return {
                ...state,
                favorites: state.favorites.filter(fav => fav.id != action.payload.id)
            }
          case 'CHANGE_THEME':
            return {
              ...state,
              theme: action.payload
            }
        default:
            throw new Error();
    }
}

const DentistContext = ({children}) => {
    // Aqui deberan implementar la logica propia del Context, utilizando el hook
    // useMemo
    const [dentistState, dentistDispatch] = useReducer(dentistsReducer, initialDentistState)
    const dentistURL = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() => {
      axios(dentistURL).then(res => {
        console.log(res);
        dentistDispatch({type: 'GET_DENTISTS', payload: res.data})})
    }, [dentistURL])

    useEffect(() => {
      if(dentistState.favorites.length < 1) {
        localStorage.removeItem('favorites')
      } else {
        localStorage.setItem('favorites', JSON.stringify(dentistState.favorites))
      }

  }, [dentistState.favorites])

  useEffect(() => {
    localStorage.setItem('theme', dentistState.theme)
  }, [dentistState.theme])

    return (
        <DentistsStates.Provider value={{dentistState, dentistDispatch}}>
            {children}
        </DentistsStates.Provider>
    );
};

export default DentistContext;

export const useDentistsContext = () => useContext(DentistsStates);