import React, {Suspense, useState} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";

import axios from "./axios";

const Auth = React.lazy(() => {
  return import("./components/Auth/Auth");
})

function App() {
  const [user, setUser] = useState(null);

  const handleSubmit = (event, authForm, newUser) => {
    event.preventDefault();

    const authData = {
        email: authForm.email.value,
        password: authForm.password.value,
        returnSecureToken: true
    };

    let url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAX18czgBvVp4ZtoL9OWCUxZhC_it3G4ts";

    if (newUser) {
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAX18czgBvVp4ZtoL9OWCUxZhC_it3G4ts"
    }
    
    axios.post(url, authData)
        .then(response => {
            const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);

            localStorage.setItem("token", response.data.idToken);
            localStorage.setItem("expirationDate", expirationDate);
            localStorage.setItem("userId", response.data.localId);
            setUser(response.data.idToken);
        })
        .catch(err => {
            console.log(err);
        });
  }

  let routes = (
    <Switch>
      <Route path="/" exact component={Layout} />
      <Route path="/auth" render={(props) => <Auth handleSubmit={handleSubmit} user={user} {...props}/>} />
    </Switch>
  );

  return (
    <BrowserRouter>
      <Suspense fallback={"Loading..."}>
        {routes}
      </Suspense>
    </BrowserRouter>
  );
}

export default App;


// function App(props) {
//   useEffect(() => {
//     props.onTryAutoSignup();
//   }, [props]);