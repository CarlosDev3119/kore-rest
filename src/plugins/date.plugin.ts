import moment, { Moment } from 'moment';

interface DateProps {
    getActualDate: () => string,
    getLastDate: ( hoursSubstract: number) => string
}



export const generateDate = ( hourActual: Moment ): DateProps =>  {
    
    return {

        getActualDate: ( ) => {
            return hourActual.format('MM-DD-YYYY, h:mm a');
        },
    
        getLastDate: (hoursSubstract: number) => {
            return hourActual.subtract(hoursSubstract, 'hours').format('MM-DD-YYYY, h:mm a');
        }
        
    }
}

