// Function to calculate factorial without Web Worker
function calculateWithoutWebWorker() {
    const inputNumber = prompt('Enter a number to calculate its factorial:');
    if (inputNumber === null || isNaN(inputNumber)) {
        alert('Invalid input. Please enter a valid number.');
        return;
    }

    const number = parseInt(inputNumber, 10);

    const startTime = performance.now();
    const result = calculateFactorial(number);
    const endTime = performance.now();

    const duration = endTime - startTime;
    displayResult('result-without-worker', result, duration);
}

// Function to calculate factorial with Web Worker
function calculateWithWebWorker() {
    const inputNumber = prompt('Enter a number to calculate its factorial:');
    if (inputNumber === null || isNaN(inputNumber)) {
        alert('Invalid input. Please enter a valid number.');
        return;
    }

    const number = parseInt(inputNumber, 10);
    const startTime = performance.now();

    // Create a new Web Worker
    const worker = new Worker('/JavaScript/dataProcessor.js');

    // Define the data processing logic within the Web Worker
    worker.onmessage = function (event) {
        const { result, duration } = event.data; // Destructuring the event.data object
        const endTime = performance.now();

        // Remove loading indicator (optional)
        displayResult('result-with-worker', result, duration);

        // Terminate the Web Worker
        worker.terminate();
    };

    // Handle errors in the Web Worker
    worker.onerror = function (error) {
        console.error('Web Worker error:', error);

        // Terminate the Web Worker
        worker.terminate();
    };

    // Initiate calculation within the Web Worker
    worker.postMessage(number);
}


// Function to display result and duration
function displayResult(elementId, result, duration) {
    const resultContainer = document.getElementById(elementId);
    resultContainer.innerHTML = `
        <p>Result: ${result}</p>
        <p>Calculation Duration: ${duration.toFixed(2)} milliseconds</p>
    `;
}

// Function to calculate factorial
function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calculateFactorial(n - 1);
    }
}
