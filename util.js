/**
 * Come code injected from OpenAI ChatGPT
 * @param {*} amount amount of to be converted 
 * @returns converts ints or floats to strings with dollar signs, commas, and/or cents
 */
function toDollar(amount, doCents=false) {
    // Convert the number to a string and split into dollars and cents
    let [dollars, cents] = amount.toFixed(2).split(".");

    // Add commas for thousands separator
    dollars = dollars.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Format the dollar amount with cents and the dollar sign
    return (doCents) ? `$${dollars}.${cents}` : `$${dollars}`;
}
