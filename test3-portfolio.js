// Import the http module to make HTTP requests. From this point, you can use `http` methods to make HTTP requests.
import http from 'k6/http';

// Import the sleep function to introduce delays. From this point, you can use the `sleep` function to introduce delays in your test script.
import { check, sleep } from 'k6';


export const options = {
    stages: [
        { duration: '10s', target: 5 }, // Ramp up to 5 VUs in 10 seconds
        { duration: '20s', target: 5 }, // Stay at 5 VUs for 20 seconds
        { duration: '10s', target: 0 }, // Ramp down to 0 VUs in 10 seconds
    ],
    thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
  },
};

// The default exported function is gonna be picked up by k6 as the entry point for the test script. It will be executed repeatedly in "iterations" for the whole duration of the test.
export default function () {
  // Make a GET request to the target URL
  const res = http.get('https://zahran001.github.io/');
  // define a check named "status was 200" that passes if res.status equals 200
  check(res, { 'status was 200': (r) => r.status == 200 });
  

  // Sleep for 10 seconds
  sleep(10);
}

// Supports Typescript
