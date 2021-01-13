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
        <section className="rates">
            <h2 className="heading--bravo">Latest Rates</h2>
            <p>
                Check out the latest foreign exchange rates against base
                currency of GBP. Currency rates are updated every 24 hours with
                new exchange rates.
            </p>
            <ul>
                <li>
                    <span className="fix-flag">
                        <img src={gb}></img>
                    </span>
                    <span className="fix">GBP</span>
                    <span className="fix">1</span>
                </li>
                <li>
                    <span className="fix-flag">
                        <img src={usa}></img>
                    </span>
                    <span className="fix">USD</span>
                    <span className="fix">1.3606</span>
                </li>
                <li>
                    <span className="fix-flag">
                        <img src={eu}></img>
                    </span>
                    <span className="fix">EUR</span>
                    <span className="fix">1.1165</span>
                </li>
                <li>
                    <span className="fix-flag">
                        <img src={jpy}></img>
                    </span>
                    <span className="fix">JPY</span>
                    <span className="fix">141.5274</span>
                </li>
                {/* <li>
                    <img src={can}></img>CAD<span>{list.CAD}</span>
                </li>
                <li>
                    <img src={aus}></img>AUD<span>{list.AUD}</span>
                </li>
                <li>
                    <img src={nz}></img>NZD<span>{list.NZD}</span>
                </li>
                <li>
                    <img src={swz}></img>CHF<span>{list.CHF}</span>
                </li>
                <li>
                    <img src={sa}></img>ZAR<span>{list.ZAR}</span>
                </li>
                <li>
                    <img src={ind}></img>INR<span>{list.INR}</span>
                </li>
                <li>
                    <img src={snp}></img>SGD<span>{list.SGD}</span>
                </li> */}
            </ul>
        </section>
    );
};

export default LatestRates;
