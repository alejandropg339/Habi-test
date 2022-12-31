const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
});

export const formatToPesos = (numberToFormat: number): string => {
    return formatterPeso.format(numberToFormat);
};

export const transformToNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
        if(e.target.value !== '' && e.target.value !== '') {
             const currencySeparator = e.target.value.split('$');
             if(currencySeparator.length > 0){
                 return currencySeparator[1].split('.').join('')
             }
        }        
    } catch (error) {
        console.log('')
    }
}