const addNumbers = require('./app.js');

if (addNumbers(2, 3) === 5) {
    console.log("TEST PASSED: 2+3 equals 5");
    process.exit(0);
} else {
    console.error("TEST FAILED: Math is broken!");
    process.exit(1);
}