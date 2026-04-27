import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useLoginMutation, useRegisterUserMutation } from "../../services/api";
import { setCredentials } from "../../features/auth/authSlice";

import "./AuthForm.css";

function AuthForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [mode, setMode] = useState("login");
    const [errorText, setErrorText] = useState("");

    const [login, { isLoading: isLoginLoading }] = useLoginMutation();
    const [registerUser, { isLoading: isRegisterLoading }] = useRegisterUserMutation();

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setErrorText("");

        try {
            if (mode === "login") {
                const user = await login({
                    username: form.username,
                    password: form.password,
                    expiresInMins: 30,
                }).unwrap();

                dispatch(
                    setCredentials({
                        user,
                        token: user.accessToken,
                    })
                );

                navigate("/products");
                return;
            }

            if (form.password !== form.confirmPassword) {
                setErrorText("Passwords do not match");
                return;
            }

            const createdUser = await registerUser({
                username: form.username,
                email: form.email,
                password: form.password,
            }).unwrap();

            dispatch(
                setCredentials({
                    user: createdUser,
                    token: "registered-user-token",
                })
            );

            navigate("/products");
        } catch (error) {
            setErrorText("Invalid data. Check username and password.");
        }
    }

    const isLoading = isLoginLoading || isRegisterLoading;

    return (
        <section className="auth-form">
            <div className="auth-form__header">
                <h1 className="auth-form__title">
                    {mode === "login" ? "Welcome back" : "Create account"}
                </h1>

                <p className="auth-form__subtitle">
                    {mode === "login"
                        ? "Sign in to continue using 2nd Hand Market"
                        : "Register to save products and manage reserved items"}
                </p>
            </div>

            <div className="auth-form__tabs">
                <button
                    className={mode === "login" ? "auth-form__tab auth-form__tab--active" : "auth-form__tab"}
                    type="button"
                    onClick={() => setMode("login")}
                >
                    Login
                </button>

                <button
                    className={mode === "register" ? "auth-form__tab auth-form__tab--active" : "auth-form__tab"}
                    type="button"
                    onClick={() => setMode("register")}
                >
                    Register
                </button>
            </div>

            <form className="auth-form__body" onSubmit={handleSubmit}>
                <label className="auth-form__field">
                    <span>Username</span>
                    <input
                        name="username"
                        type="text"
                        placeholder="login"
                        value={form.username}
                        onChange={handleChange}
                        required
                    />
                </label>

                {mode === "register" && (
                    <label className="auth-form__field">
                        <span>Email</span>
                        <input
                            name="email"
                            type="email"
                            placeholder="email@example.com"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                )}

                <label className="auth-form__field">
                    <span>Password</span>
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </label>

                {mode === "register" && (
                    <label className="auth-form__field">
                        <span>Confirm password</span>
                        <input
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm password"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </label>
                )}

                {errorText && <p className="auth-form__error">{errorText}</p>}

                <button className="auth-form__submit" type="submit" disabled={isLoading}>
                    {isLoading ? "Loading..." : mode === "login" ? "Login" : "Register"}
                </button>
            </form>
        </section>
    );
}

module.exports = AuthForm;
module.exports.default = AuthForm;