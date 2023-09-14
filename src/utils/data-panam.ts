import { data } from "../data/panamerican";


export const getDataById = (id: number) => {

    const cofre = data.filter( value => value.idCofre === id);
    
    return [...cofre];

}