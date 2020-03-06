import React, { Component } from 'react'
import BloodBankSearch from "./bloodbanksearch.component";
import AllBloodBank from "./allbloodbank.component";

export default class BloodBankList extends Component {
    render() {
        return (
            <div>
                <BloodBankSearch />
                <div className="mt-2">
                    <AllBloodBank />
                </div>
            </div>
        )
    }
}
