import { useEffect, useState } from "react";
import axios from "axios";

import usa from "../assets/images/united-states.png";
import eu from "../assets/images/european-union.png";
import gb from "../assets/images/united-kingdom.png";
import jpy from "../assets/images/japan.png";
import aus from "../assets/images/australia.png";
import can from "../assets/images/canada.png";
import nz from "../assets/images/new-zealand.png";
import swz from "../assets/images/switzerland.png";
import sa from "../assets/images/south-africa.png";
import ind from "../assets/images/india.png";
import snp from "../assets/images/singapore.png";

const LatestRates = () => {
    const [list, setList] = useState();

    // useEffect(() => {
    //     axios({
    //         method: "GET",
    //         url:
    //             "https://v6.exchangerate-api.com/v6/b2ff8db2977c244d5c41f000/latest/GBP",
    //     }).then((response) => {
    //         console.log(response.data.conversion_rates);
    //         setList(response.data.conversion_rates);
    //     });
    // }, []);

    return (
        <section>
            <h2 className="heading--bravo">Latest Rates</h2>
            <p>
                Check out the latest foreign exchange rates against base
                currency of GBP
            </p>
            <p>
                Currency rates are updated every 24 hours with new exchange
                rates.
            </p>
            <ul>
                <li>
                    <img src={gb}></img>GBP
                </li>
                <li>
                    <img src={usa}></img>USD
                </li>
                <li>
                    <img src={eu}></img>EUR
                </li>
                <li>
                    <img src={jpy}></img>JPY
                </li>
                <li>
                    <img src={can}></img>CAD
                </li>
                <li>
                    <img src={aus}></img>AUD
                </li>
                <li>
                    <img src={nz}></img>NZD
                </li>
                <li>
                    <img src={swz}></img>CHF
                </li>
                <li>
                    <img src={sa}></img>ZAR
                </li>
                <li>
                    <img src={ind}></img>INR
                </li>
                <li>
                    <img src={snp}></img>SGD
                </li>
            </ul>
        </section>
    );
};

export default LatestRates;
