// Web Worker for factorial calculation
onmessage = function (event) {
    const number = event.data;

    if (isNaN(number) || number < 0) {
        // Handle invalid input
        postMessage('Invalid input. Please enter a non-negative number.');
        return;
    }

    const startTime = performance.now();

    const result = calculateFactorial(number);

    const endTime = performance.now();
    const duration = endTime - startTime;

    // Send the result back to the main thread along with the duration
    postMessage({ result, duration });
};

// Function to calculate factorial
function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calculateFactorial(n - 1);
    }
}
