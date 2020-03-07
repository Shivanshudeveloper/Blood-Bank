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
                            <Link to={"/bloodbankinfo"}>
                                Doon Hospital, District Hospital Blood Bank 
                            </Link>
                            
                            <h6 class="card-subtitle mb-2 mt-2 text-muted">doonbloodbank16@gmail.com</h6>
                            <a target="_blank" href="https://www.google.com/maps/search/Doon+Hospital,+District+Hospital+Blood+Bank/@30.3269453,78.0211324,15z/data=!3m1!4b1">
                                <i class="fas text-success mr-2 fa-map-marked-alt"></i>
                                View on Maps
                            </a>
                            <div className="mt-2 text-warning">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </h5>
                        <p className="card-text">Court Road, Nagar Nigam, Dehradun, Uttarakhand - 248001 </p>
                        <p><span className="font-text-bold">Available Blood Unites: </span>A+, B+, O-</p>
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
                            <h6 class="card-subtitle mb-2 mt-2 text-muted">doonbloodbank16@gmail.com</h6>
                            <a target="_blank" href="https://www.google.com/maps/search/Doon+Hospital,+District+Hospital+Blood+Bank/@30.3269453,78.0211324,15z/data=!3m1!4b1">
                                <i class="fas text-success mr-2 fa-map-marked-alt"></i>
                                View on Maps
                            </a>
                            <div className="mt-2 text-warning">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </h5>
                        <p className="card-text">41-A, Rajpura Road, Dehradoon, Dehradun, Uttarakhand - 248001 </p>
                        <p><span className="font-text-bold">Available Blood Unites: </span>A+, B+, O-</p>
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
                            <h6 class="card-subtitle mb-2 mt-2 text-muted">doonbloodbank16@gmail.com</h6>
                            <a target="_blank" href="https://www.google.com/maps/search/Doon+Hospital,+District+Hospital+Blood+Bank/@30.3269453,78.0211324,15z/data=!3m1!4b1">
                                <i class="fas text-success mr-2 fa-map-marked-alt"></i>
                                View on Maps
                            </a>
                            <div className="mt-2 text-warning">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half"></i>
                            </div>
                        </h5>
                        <p className="card-text">41-A, Rajpura Road, Dehradoon, Dehradun, Uttarakhand - 248001 </p>
                        <p><span className="font-text-bold">Available Blood Unites: </span>A+, B+, O-</p>
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
                            <h6 class="card-subtitle mb-2 mt-2 text-muted">doonbloodbank16@gmail.com</h6>
                            <a target="_blank" href="https://www.google.com/maps/search/Doon+Hospital,+District+Hospital+Blood+Bank/@30.3269453,78.0211324,15z/data=!3m1!4b1">
                                <i class="fas text-success mr-2 fa-map-marked-alt"></i>
                                View on Maps
                            </a>
                            <div className="mt-2 text-warning">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half"></i>
                            </div>
                        </h5>
                        <p className="card-text">41-A, Rajpura Road, Dehradoon, Dehradun, Uttarakhand - 248001 </p>
                        <p><span className="font-text-bold">Available Blood Unites: </span>A+, B+, O-</p>
                    </div>
                </div>


            </div>
        )
    }
}
