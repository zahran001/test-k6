// Import the http module to make HTTP requests. From this point, you can use `http` methods to make HTTP requests.
import http from 'k6/http';

// Import the sleep function to introduce delays. From this point, you can use the `sleep` function to introduce delays in your test script.
import { sleep } from 'k6';

// Run a total of 10 iterations with 1 default VU.
export const options = {
    iterations: 10,
};

// The default exported function is gonna be picked up by k6 as the entry point for the test script. It will be executed repeatedly in "iterations" for the whole duration of the test.
export default function () {
  // Make a GET request to the target URL
  http.get('https://test.k6.io');

  // Sleep for 10 seconds
  sleep(10);
}

// Supports Typescript
