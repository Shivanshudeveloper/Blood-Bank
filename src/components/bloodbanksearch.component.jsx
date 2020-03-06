import React, { Component } from 'react'

export default class BloodBankSearch extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                    <label className="font-weight-bold h2">Search Blood Bank</label>
                    <input  type="text"
                        required
                        className="form-control"
                        />
                    </div>
                    <div className="form-group">
                    <center>
                        <input type="submit" value="Search Blood Bank" className="btn btn-primary" />
                    </center>
                    </div>
                </form>
            </div>
        )
    }
}
