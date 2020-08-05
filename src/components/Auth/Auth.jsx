import React, {  useState } from "react";
import { Redirect } from "react-router-dom";

import classes from "./Auth.module.css";

const Auth = (props) => {
    const [authForm, setAuthForm] = useState({
        email: {
            elementType: "input",
            elementConfig:{
                type: "email",
                placeholder: "Email Address"
            },
            value: "",
        },
        password: {
            elementType: "input",
            elementConfig:{
                type: "password",
                placeholder: "Password"
            },
            value: "",
        }
    });
    const [newUser, setNewUser] = useState(false);

    function handleChange() {
        setNewUser(prevState => {
            return !prevState;
        });
    }

    function inputChangedHandler(event, inputName) {
        const updatedInputs = {
            ...authForm,
            [inputName]: {
                ...authForm[inputName],
                 value: event.target.value,
            }
        };

        setAuthForm(updatedInputs);
    }

    const formElementsArray = [];

    for (let key in authForm) {
        formElementsArray.push({
            id: key,
            config: authForm[key]
        });
    }

    // let errorMessage = null;

    // if (props.error) {
    //     errorMessage = <p style={{color: "red"}}className="mb-3 text-center">invalid login information. please try again</p>;
    // }

    let authRedirect = null;

    if (props.user) {
        authRedirect = <Redirect to={props.authRedirectPath} />
    }

    let form = (
        <React.Fragment>
            {/* {errorMessage ? errorMessage : <p className="mb-3 text-center">please sign in</p>} */}
            {authRedirect}
            <form className={classes.Form} onSubmit={(event) => props.handleSubmit(event, authForm, newUser)}>
                {formElementsArray.map(formElement => (
                    <input 
                        key={formElement.id}
                        className="form-control"
                        type={formElement.config.elementConfig.type}
                        placeholder={formElement.config.elementConfig.placeholder}
                        onChange={(event) => inputChangedHandler(event, formElement.id)}
                        value={formElement.config.value}
                        required />
                ))}
                <button className="btn btn-lg btn-block">{newUser ? "Sign Up" : "Sign In"}</button>
            </form>
        </React.Fragment>
    );   

    return (
        <div className={classes.Auth}>
            {authRedirect}
            <div className={classes.AuthBackground}>
                <h1 className="mb-3 font-weight-normal text-center">urYard</h1>
                {form}
                <p>{newUser ? "Already have an account" : "First time"}? <span onClick={handleChange}>{newUser ? "Sign in" : "Create an account"}!</span></p>
            </div>
        </div>
    );
}

export default Auth;