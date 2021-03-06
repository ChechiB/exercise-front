import {COUNTRIES} from "./countries"

export function formatDecimal(decimals){
    return decimals < 10 ?  decimals.toString() + 0 : decimals
}

export function getSymbol(currency){
    let symbol = '$';
    COUNTRIES.forEach(country => {
        if (country.currency === currency) {
            symbol = country.symbol;
        };
    });
    return symbol;
}

export function getStatus(condition){
    return condition ? 'Nuevo' : 'Usado'
}