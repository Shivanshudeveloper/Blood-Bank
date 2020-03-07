import React, { Component } from 'react'

export default class BloodBankSearch extends Component {
    render() {
        return (
            <div>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                    
                    <label className="font-weight-bold h2">Search Blood Bank</label>
                    <div className="row">
                        <div className="col">
                            <input  type="text"
                                required
                                className="form-control mt-2"
                                placeholder="Search By Bank Name"
                            />
                        </div>
                        <div className="col">
                            <select className="form-control mt-2" id="exampleFormControlSelect1">
                                    <option>A+</option>
                                    <option>A-</option>
                                    <option>O+</option>
                                    <option>O-</option>
                                    <option>B+</option>
                                    <option>AB-</option>
                                    <option>AB+</option>
                            </select>
                        </div>
                    </div>
                    
                    </div>
                    <div className="form-group">
                    <center>
                        <div className="row">
                            <div className="col">
                                <input type="submit" value="Search Blood Bank" className="btn btn-primary" />
                                <br/>
                            </div>
                        </div>
                        {/* <button className="btn btn-light dropdown-toggle ml-2" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            <i class="fas fa-filter"></i>
                            Filter Blood Bank
                        </button> */}
                        
                        <div className="collapse" id="collapseExample">
                            <div className="card card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                        </div>
                    </center>
                    </div>
                </form>
            </div>
        )
    }
}
