import React, { Component } from 'react'
import FaPhone from "react-icons/fa/";
import { Link } from 'react-router-dom';

export default class AllBloodBank extends Component {
    render() {
        return (
            <div className="mb-2">
                <div className="card mt-2">
                    <div class="card-body">
                        <h6 class="card-subtitle float-right mb-2 text-muted">
                            <i class="fas mr-2 text-primary fa-phone"></i>
                            0135 - 2659355
                        </h6>
                        <h5 class="card-title">
                            <Link>
                                Doon Hospital, Dehradun
                            </Link>
                        </h5>
                        <p className="card-text">41-A, Rajpura Road, Dehradoon, Dehradun, Uttarakhand - 248001 </p>
                    </div>
                </div>

                <div className="card mt-2">
                    <div className="card-body">
                        <h6 class="card-subtitle float-right mb-2 text-muted">
                            <i class="fas mr-2 text-primary fa-phone"></i>
                            0135 - 2471223
                        </h6>
                        <h5 className="card-title">
                            <Link>
                                HIHT Jolly Grant, Dehradun
                            </Link>
                        </h5>
                        <p className="card-text">41-A, Rajpura Road, Dehradoon, Dehradun, Uttarakhand - 248001 </p>
                    </div>
                </div>

                <div className="card mt-2">
                    <div className="card-body">
                        <h6 class="card-subtitle float-right mb-2 text-muted">
                            <i class="fas mr-2 text-primary fa-phone"></i>
                            0135 - 2431905
                        </h6>
                        <h5 className="card-title">
                            <Link>
                                SPS Rishikesh
                            </Link>
                        </h5>
                        <p className="card-text">41-A, Rajpura Road, Dehradoon, Dehradun, Uttarakhand - 248001 </p>
                    </div>
                </div>

                <div className="card mt-2">
                    <div className="card-body">
                        <h6 class="card-subtitle float-right mb-2 text-muted">
                            <i class="fas mr-2 text-primary fa-phone"></i>
                            0135 - 2462940
                        </h6>
                        <h5 className="card-title">
                            <Link>
                                AIIMS Rishikesh
                            </Link>
                        </h5>
                        <p className="card-text">41-A, Rajpura Road, Dehradoon, Dehradun, Uttarakhand - 248001 </p>
                    </div>
                </div>


            </div>
        )
    }
}
