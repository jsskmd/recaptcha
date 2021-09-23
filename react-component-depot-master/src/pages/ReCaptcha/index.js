import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReCAPTCHA from "react-google-recaptcha";
 
import AppConfig from "App.config";
 import Axios from "axios";

const ReCaptchaSignup = () => {
     const [error, setError] = useState("");
    const [token, setToken] = useState("");
    
    const reCaptcha = useRef();

    const onSignUp = () => {
        if (!token) {
            setError("You must verify the captcha");
            return;
        }

        setError("");
    

        Axios.post(AppConfig.api + "user/signup-with-recaptcha", {
            token,
            email: "sfshd@sfsdf.sdf"
        })
            .then(resp => {
                alert("Sign up success");
            })
            .catch(({ response }) => {
                setError(response.data.error);
            })
            .finally(() => {
                reCaptcha.current.reset();
                 setToken("");
                
            });
    };
 
    return (
        <>
 
 
            <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                    <div className="card bg-light">
                        <article
                            className="card-body mx-auto"
                            style={{ maxWidth: "400px" }}
                        >
                            <h4 className="card-title mt-3 text-center">
                               Login
                            </h4>
                            

                            <form>
                            
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon="envelope" />
                                        </span>
                                    </div>
                                    <input
                                        name="email"
                                        className="form-control"
                                        placeholder="Email address"
                                        type="email"
                                    />
                                </div>

                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon="lock" />
                                        </span>
                                    </div>
                                    <input
                                        className="form-control"
                                        placeholder="Create password"
                                        type="password"
                                    />
                                    
                                </div>

                                <div className="form-group">
                                    <ReCAPTCHA
                                        ref={reCaptcha}
                                        sitekey={AppConfig.GOOGLE.reCaptcha}
                                        onChange={token => setToken(token)}
                                        onExpired={e => setToken("")}
                                    />
                                </div>
                                <div className="form-group">
                                    {error && (
                                        <p className="text-danger">{error}</p>
                                    )}
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-block"
                                      
                                        onClick={() => onSignUp()}
                                    >
                                        {" "}
                                        Login{" "}
                                    </button>
                                </div>
                            
                            </form>
                        </article>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReCaptchaSignup;
