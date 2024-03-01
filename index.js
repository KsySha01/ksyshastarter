// Function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
    return length * width;
}

// Function to display the result
function displayResult(area) {
    console.log("The area of the rectangle is: " + area);
}

// Function to prompt the user for a valid number
function promptForNumber(promptMessage) {
    var input;
    do {
        input = prompt(promptMessage);
        if (input === null) {
            return null; // If user cancels prompt, return null
        }
        input = parseFloat(input);
    } while (isNaN(input));
    return input;
}

// Main function to orchestrate the interaction
function main() {
    console.log("Welcome to the rectangle area calculator!");

    var length = promptForNumber("Enter the length of the rectangle:");
    if (length === null) {
        console.log("Operation canceled.");
        return;
    }

    var width = promptForNumber("Enter the width of the rectangle:");
    if (width === null) {
        console.log("Operation canceled.");
        return;
    }

    var area = calculateRectangleArea(length, width);
    
    displayResult(area);
}

// Call the main function to start the interaction
main();
