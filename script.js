document.getElementById('btn').addEventListener('click', () => {
    const outputDiv = document.getElementById('output');
    const inputNumber = parseFloat(document.getElementById('ip').value);

    // First Promise: Resolves after 2 seconds with the input number
    new Promise((resolve) => {
        setTimeout(() => {
            outputDiv.textContent = `Result: ${inputNumber}`;
            resolve(inputNumber);
        }, 2000);
    })
    // Second Promise: Multiplies the number by 2 and resolves after 1 second
    .then((number) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const result = number * 2;
                outputDiv.textContent = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    // Third Promise: Subtracts 3 from the number and resolves after 1 second
    .then((number) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const result = number - 3;
                outputDiv.textContent = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    // Fourth Promise: Divides the number by 2 and resolves after 1 second
    .then((number) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const result = number / 2;
                outputDiv.textContent = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    // Fifth Promise: Adds 10 to the number and resolves after 1 second
    .then((number) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const result = number + 10;
                outputDiv.textContent = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    // Final result: Updates the text content with the final result
    .then((finalResult) => {
        outputDiv.textContent = `Final Result: ${finalResult}`;
    });
});
