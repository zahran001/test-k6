// Import the http module to make HTTP requests
import http from 'k6/http';
// Import the Trend metric type from k6/metrics for custom metrics
import { Trend } from 'k6/metrics';

// Create a new custom Trend metric called 'waiting_time'
const myTrend = new Trend('waiting_time');

export default function () {
  // Send a GET request to the specified URL
  const r = http.get('https://zahran001.github.io/');
  // Record the 'waiting' time from the response timings in the custom metric
  myTrend.add(r.timings.waiting);
  // Print the name of the custom metric to the console (for debugging)
  console.log(myTrend.name); // waiting_time
}