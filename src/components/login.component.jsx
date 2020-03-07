import React, { Component } from 'react'
import login_image from "../images/blood-login.jpg";
import { Link } from "react-router-dom";


export default class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col">
                            <img src={login_image} style={{width: "80%"}} alt="" srcset=""/>
                    </div>
                    <div className="col-5">

                        
                    <section>
                        <div>
                            <div>
                            <div className="card card-body shadow">
                                <h1 className="text-center mb-3"><i className="fas fa-sign-in-alt"></i>Login</h1>
                                <form action="/users/login" method="POST">
                                <div className="form-group">
                                    <span className="h5 text-primary">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                    <input
                                    type="admission"
                                    id="email"
                                    name="email"
                                    pattern="^(([-\w\d]+)(\.[-\w\d]+)*@([-\w\d]+)(\.[-\w\d]+)*(\.([a-zA-Z]{2,5}|[\d]{1,3})){1,2})$" 
                                    className="form-control"
                                    placeholder="example@example.com"
                                    required
                                    />
                                </div>
                                <div className="form-group">
                                    <span className="h5 text-primary">
                                        <i className="fas fa-unlock"></i>
                                    </span>
                                    <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Enter Password"
                                    required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Login</button>
                                </form>
                                <p className="lead mt-4">
                                No Account? <Link to="/register">Register</Link>
                                </p>
                            </div>
                            </div>
                        </div>
                    </section>



                    </div>
                </div>
            </React.Fragment>
        )
    }
}
