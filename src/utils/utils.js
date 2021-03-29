export function formatDecimal(decimals){
    return decimals < 10 ?  decimals.toString() + 0 : decimals
}

