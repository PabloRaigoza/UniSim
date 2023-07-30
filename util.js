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
  