import React, { useRef, useState, useEffect } from "react";
import Validator from "validatorjs";
import Multiselect from "multiselect-react-dropdown";

import Head from "next/head";
import Link from "next/link";

import styles from "../styles/modules/auth.module.scss";
import { AuthService } from "../services";

import Router, { useRouter } from "next/router";
import { APP_DETAILS, KEYS } from "../utils/constants";
import { notifyError, notifySuccess } from "../utils/alerts";
import RouteService from "../middlewares/routing";
import Auth from "../middlewares/auth";
import ForbiddenPage from "../layouts/ForbiddenPage";

export default function Register() {
  const router = useRouter();

  const fullNameContainer = useRef(null);
  const emailContainer = useRef(null);
  const userNameContainer = useRef(null);
  const passWordContainer = useRef(null);

  const initialErrors = {
    full_name: [],
    email: [],
    username: [],
    password: [],
  };

  const [selectedClubs, setSelectedClubs] = useState([]);

  const [errors, setErrors] = useState(initialErrors);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let is_authed = await Auth.isAuthed();
        if (is_authed) return await router.push("/");
      } catch (e) {}
    };
    fetchData().then();
  }, []);

  const getValue = (container) => container.current.value;

  const submitForm = async (event) => {
    try {
      event.preventDefault();
      const user = {
        email: getValue(emailContainer),
        username: getValue(userNameContainer),
        password: getValue(passWordContainer),
        full_name: getValue(fullNameContainer),
      };

      let valid = new Validator(user, {
        email: "required|email",
        username: "required|string|min:3",
        password: "required|string|min:6",
        full_name: "required|string|min:3",
      });

      if (valid.fails(undefined))
        return setErrors((errors) => {
          return { ...errors, ...valid.errors.all() };
        });

      if (valid.passes(undefined)) {
        setErrors((errors) => {
          return { ...errors, ...valid.errors.all() };
        });
        let res = await AuthService.register(user);
          sessionStorage.setItem(KEYS.LOCAL_STORAGE_TOKEN_KEY, res.data.token);
          notifySuccess("You have successfully Registered.");
          if (RouteService.getPrevRoute()) {
            let link = RouteService.getPrevRoute();
            RouteService.removePrevRoute();
            await Router.push(link);
          } else {
            window.location.href = "/home";
          }
      }
    } catch (e) {
      setErrors({ ...initialErrors, ...e.response.data });
    }
  };

  return (
    <ForbiddenPage>
      <Head>
        <title>Register - {APP_DETAILS.NAME_FULL}</title>
      </Head>
      <div className="row mx-0">
        <div className="col-5 col-md-4 _bg-primary  font-weight-bolder text-white text-center">
          <div
            className={`${styles.right_bar} d-flex flex-column align-items-center justify-content-center px-3`}
          >
            <h1 className="pb-4 font-weight-bolder">Welcome back !</h1>
            <p className="font-weight-light">
              To keep connected with us <br /> provide with us your info
            </p>
            <Link href={`/`}>
              <button className="btn btn-side border border-white text-white px-5 py-2 my-5 rounded-pill">
                SIGN IN
              </button>
            </Link>
          </div>
        </div>
        <div className="col-md-8 col-7 justify-content-center">
          <div className="vh-100 d-md-flex flex-md-column  align-items-center justify-content-center mt-5 mt-md-2">
            <h1 className="font-weight-bolder _color-primary pb-4">
              Create Account
            </h1>
            <form onSubmit={submitForm}>
              <div className="form-group">
                <label htmlFor="full_name">Full names</label>
                <input
                  type="text"
                  id="full_name"
                  ref={fullNameContainer}
                  className={`form-control col-12 ${
                    errors.full_name.length > 0 && "is-invalid"
                  } _input`}
                />
                <div className="invalid-feedback">{errors.full_name[0]}</div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  ref={emailContainer}
                  className={`form-control col-12 ${
                    errors.email.length > 0 && "is-invalid"
                  } _input`}
                />
                <div className="invalid-feedback">{errors.email[0]}</div>
              </div>
              <div className="form-group">
                <label htmlFor="user_name">User name</label>
                <input
                  type="text"
                  id="user_name"
                  ref={userNameContainer}
                  className={`form-control col-12 ${
                    errors.username.length > 0 && "is-invalid"
                  } _input`}
                />
                <div className="invalid-feedback">{errors.username[0]}</div>
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  ref={passWordContainer}
                  className={`form-control col-12 ${
                    errors.password.length > 0 && "is-invalid"
                  } _input`}
                />
                <div className="invalid-feedback">{errors.password[0]}</div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn _btn text-white px-5 py-2 my-4 rounded-pill"
                >
                  SIGN UP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ForbiddenPage>
  );
}
