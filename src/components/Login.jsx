import React from 'react'
import axios from 'axios'

function Login() {
 
    const CLIENT_ID = "da92c0a4-fdd9-4943-a285-898bb51ebd39";
    const REDIRECT_URI = "https://localhost:5173"; // Adjust based on your environment
  
    // Construct the Upstox authorization URl
    const authorizationUrl = `https://api.upstox.com/index/dialog/authorize?apiKey=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code`;


let config = {
method: 'get',
maxBodyLength: Infinity,
  url:  authorizationUrl,
  headers: { }
};

axios(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});


  return (
    <div>Login</div>
  )
}

export default Login