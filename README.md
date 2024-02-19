# Web Worker Factorial Calculation

This project aims to demonstrate the use of Web Workers in JavaScript to perform factorial calculations efficiently. The project includes implementations for calculating factorial both with and without Web Workers, highlighting the time difference between the two approaches.

## Overview

Factorial calculation involves multiplying a sequence of descending natural numbers. It's a computationally intensive task, especially for large numbers. In a web environment, performing such calculations on the main thread can cause the user interface to freeze, leading to a poor user experience. Web Workers provide a solution by enabling parallel execution of scripts in the background without affecting the main thread.

## Features

- Calculation of factorial using traditional approach (without Web Workers).
- Calculation of factorial using Web Workers for parallel execution.
- Display of time difference between the two approaches for factorial calculation.

## Usage

1. Clone the repository:

    ```
    git clone https://github.com/your_username/web-worker-factorial.git
    ```

2. Navigate to the project directory:

    ```
    cd web-worker-factorial
    ```

3. Open `index.html` in a web browser.

4. You will see two buttons:
   - **Calculate Factorial (Without Web Worker)**: Clicking this button will calculate factorial using the traditional approach.
   - **Calculate Factorial (With Web Worker)**: Clicking this button will calculate factorial using Web Workers.

5. View the time difference displayed after each calculation.

## File Structure

- `index.html`: Main HTML file containing the user interface.
- `script.js`: JavaScript file containing the factorial calculation logic.
- `worker.js`: JavaScript file containing the Web Worker logic for factorial calculation.
- `style.css`: CSS file for styling the user interface.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Contributions

Contributions are welcome! If you have any suggestions, improvements, or new features to add, feel free to open an issue or submit a pull request.


