import './App.css';

function App() {
  const reqBody = {
    "email": "mariobd38@gmail.com",
    "password": "abcdefg"
  }
  fetch("api/auth/login", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify(reqBody),
  })
  .then((response) => Promise.all([response.json(), response.headers]))
  .then(([body, headers]) => {
    const authValue = headers.get("authorization");
    console.log(authValue);
    console.log(body);
  });

  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;


// "http-proxy-middleware": "^2.0.6",

// "options": {
//   "allowedHosts": ["localhost", ".localhost"],
//   "proxy": "http://localhost:8080/"
// },