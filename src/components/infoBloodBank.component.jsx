import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class InfoBloodBank extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col">
                    <div class="card mt-4">
                        <div class="card-body">
                            <div className="mt-2 float-right text-warning">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                            </div>
                            <h5 class="card-title">Doon Hospital, District Hospital Blood Bank</h5>
                            <h6 class="card-subtitle mb-2 text-muted">9456174232</h6>
                            <h6 class="card-subtitle mb-2 text-muted">doonbloodbank16@gmail.com</h6>
                            Blood Component Available: YES
                            <p class="card-text">
                                Court Road, Nagar Nigam, Dehradun
                                <br/>
                            </p>
                        </div>
                    </div>

                    <div class="card mt-2">
                        <div class="card-body">
                            <p class="card-text">
                                
                                <a target="_blank" href="https://www.google.com/maps/search/Doon+Hospital,+District+Hospital+Blood+Bank/@30.3269453,78.0211324,15z/data=!3m1!4b1">
                                    <i class="fas text-success mr-2 fa-map-marked-alt"></i>
                                    View on Maps
                                </a>
                                <p>
                                    <i class="fas mr-2 text-primary fa-phone"></i>
                                    0135 - 2659355
                                </p>
                            </p>
                        </div>
                    </div>


                    </div>
                    <div className="col-5">
                        <span className="font-weight-bold">Blood Units Available</span>
                        <div class="list-group">
                            <a href="#" class="list-group-item list-group-item-action">
                                <h5>A+</h5>
                                <i class="fas text-success float-right fa-check-circle"></i>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <h5>O+</h5>
                                <i class="fas text-success float-right fa-check-circle"></i>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <h5>B+</h5>
                                <i class="fas text-danger float-right fa-times-circle"></i>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <h5>AB+</h5>
                                <i class="fas text-success float-right fa-check-circle"></i>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <h5>A-</h5>
                                <i class="fas text-success float-right fa-check-circle"></i>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <h5>O-</h5>
                                <i class="fas text-danger float-right fa-times-circle"></i>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <h5>B-</h5>
                                <i class="fas text-success float-right fa-check-circle"></i>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <h5>AB-</h5>
                                <i class="fas text-success float-right fa-check-circle"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
