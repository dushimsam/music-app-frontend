import React, {useState, useRef, useEffect} from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/modules/auth.module.scss";
import Validator from "validatorjs";
import {AuthService} from "../services";
import Router, {useRouter} from "next/router";
import {APP_DETAILS, KEYS} from "../utils/constants";
import {notifyError, notifySuccess} from "../utils/alerts";
import RouteService from "../middlewares/routing"
import Auth from "../middlewares/auth";
import ForbiddenPage from "../layouts/ForbiddenPage";

export default function Login() {
    const router = useRouter();

    const emailOrUsernameContainer = useRef(null);
    const passWordContainer = useRef(null);

    const initialErrors = {
        login: [], password: [],
    };

    const [errors, setErrors] = useState(initialErrors);

    const getValue = (container) => container.current.value;


    useEffect(() => {
        const fetchData = async () => {
            const isActive = Auth.isActive();
            if (isActive) return await router.push("/home");
        };
        fetchData().then();
    }, []);

    const submitForm = async (event) => {
        try {
            event.preventDefault();
            const user = {
                login: getValue(emailOrUsernameContainer), password: getValue(passWordContainer),
            };

            let valid = new Validator(user, {
                login: "required|min:4", password: "required|string|min:8",
            });

            if (valid.fails(undefined)) return setErrors({...initialErrors, ...valid.errors.all()});

            if (valid.passes(undefined)) {
                setErrors(initialErrors);
                let data = await AuthService.login(user);
                if (data.data.token) {
                    Auth.setToken(data.data.token);
                    notifySuccess("Login successful");
                    if (RouteService.getPrevRoute()) {
                        let link = RouteService.getPrevRoute();
                        RouteService.removePrevRoute();
                        await Router.push(link);
                    } else {
                        window.location.href = "/";
                    }
                }
            }
        } catch (e) {
            if (e.response?.status === 400) return setErrors({...initialErrors, ...e.response.data});
            if (e.response?.status === 404) notifyError(e.response.data.message);
        }
    };

    return (<ForbiddenPage>
        <Head>
            <title>Log in - {APP_DETAILS.NAME_FULL} </title>
        </Head>
        <div className="row mx-0">
            <div className="col-lg-8 col-7">
                <div
                    className="vh-100 d-md-flex flex-md-column align-items-center justify-content-center mt-5 mt-lg-0">
                    <h1 className="font-weight-bolder _color-primary pb-5">
                        Log in into your account
                    </h1>
                    <form action="" onSubmit={submitForm}>
                        <div className="form-group">
                            <label htmlFor="login">Email or username</label>
                            <input
                                type="text"
                                ref={emailOrUsernameContainer}
                                id="login"
                                className={`form-control col-12 ${errors.login.length > 0 && "is-invalid"} _input`}
                            />
                            <div className="invalid-feedback">
                                {errors.login[0]}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                ref={passWordContainer}
                                id="password"
                                className={`form-control col-12 ${errors.password.length > 0 && "is-invalid"} _input`}
                            />
                            <div className="invalid-feedback">
                                {errors.password[0]}
                            </div>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn _btn text-white px-5 py-2 my-4 rounded-pill"
                            >
                                SIGN IN
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-lg-4 col-5 _bg-primary px-0 font-weight-bolder text-white text-center">
                <div
                    className={`${styles.right_bar} d-md-flex flex-md-column align-items-center mt-5 mt-lg-0 justify-content-center`}
                >
                    <h1 className="pb-4 font-weight-bolder">
                        Hello, Friend !
                    </h1>
                    <p className="font-weight-light">
                        Enter your personal details to start <br/> journey
                        with us
                    </p>
                    <Link href={"/register"}>
                        <button className="btn btn-side border border-white text-white px-5 py-2 my-5 rounded-pill">
                            SIGN UP
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </ForbiddenPage>);
}
