import http from 'k6/http';

export const options = {
    // Define the duration of the test
    duration: '10s',
    // Define the number of virtual users (VUs) to simulate
    vus: 5,
};

export default function () {
  const url = 'http://test.k6.io/login';
  const payload = JSON.stringify({
    email: 'aaa',
    password: 'bbb',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  

  http.post(url, payload, params);
}