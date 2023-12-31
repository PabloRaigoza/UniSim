/**
 * Some code injected from OpenAI ChatGPT
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


/**
 * Some code injected from OpenAI ChatGPT
 * @returns The size of an em in px
 */
function getEmSize() {
    // Create a temporary element
    const tempElement = document.createElement("div");
    
    // Set the font size to 1em
    tempElement.style.fontSize = "1em";
  
    // Hide the element to avoid affecting the layout
    tempElement.style.visibility = "hidden";
    tempElement.style.position = "absolute";

    tempElement.textContent = "M";
  
    // Add the temporary element to the document
    document.body.appendChild(tempElement);
  
    // Get the computed height in pixels
    const emSize = tempElement.clientHeight;
  
    // Remove the temporary element from the document
    document.body.removeChild(tempElement);
  
    return emSize;
}

const EM = getEmSize();

let LG, SM;
let px;

const MAX_TUITION = 100000;
const GRAD_COST = 1000000000; // 1 bill
const PROF_SAL = 100000; // 100k
const INIT_SPORTS_COST = 10000000; // 10m
const INIT_BONUS_PROF_COST = 500000; // 500k
const INIT_HIRE_PROF_COST = 500000; // 500k
const INIT_INVEST_RES_COST = 300000; // 300k
const RAISE_TUITION = 5000; // 5k
const LOWER_TUITION = 5000; // 5k

const ENABLE_POPUPS = true;
const MIN_IQ = 40;
const MAX_IQ = 160;
