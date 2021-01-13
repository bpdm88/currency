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
    const [loaded, setLoaded] = useState(false);
    const [list, setList] = useState();

    useEffect(() => {
        axios({
            method: "GET",
            url:
                "https://v6.exchangerate-api.com/v6/b2ff8db2977c244d5c41f000/latest/GBP",
        }).then((response) => {
            setList(response.data.conversion_rates);
            setLoaded(true);
        });
    }, []);
    return (
        <section className="rates">
            <h2 className="heading--bravo">Latest Rates</h2>
            <p>
                Check out the latest foreign exchange rates against base
                currency of GBP. Currency rates are updated every 24 hours with
                new exchange rates.
            </p>
            {!loaded ? (
                <p>Loading</p>
            ) : (
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
                        <span className="fix">{list.USD}</span>
                    </li>
                    <li>
                        <span className="fix-flag">
                            <img src={eu}></img>
                        </span>
                        <span className="fix">EUR</span>
                        <span className="fix">{list.EUR}</span>
                    </li>
                    <li>
                        <span className="fix-flag">
                            <img src={jpy}></img>
                        </span>
                        <span className="fix">JPY</span>
                        <span className="fix">{list.JPY}</span>
                    </li>
                    <li>
                        <span className="fix-flag">
                            <img src={can}></img>
                        </span>
                        <span className="fix">CAD</span>
                        <span className="fix">{list.CAD}</span>
                    </li>
                    <li>
                        <span className="fix-flag">
                            <img src={aus}></img>
                        </span>
                        <span className="fix">AUD</span>
                        <span className="fix">{list.AUD}</span>
                    </li>
                    <li>
                        <span className="fix-flag">
                            <img src={nz}></img>
                        </span>
                        <span className="fix">NZD</span>
                        <span className="fix">{list.NZD}</span>
                    </li>
                    <li>
                        <span className="fix-flag">
                            <img src={swz}></img>
                        </span>
                        <span className="fix">CHF</span>
                        <span className="fix">{list.CHF}</span>
                    </li>
                    <li>
                        <span className="fix-flag">
                            <img src={sa}></img>
                        </span>
                        <span className="fix">ZAR</span>
                        <span className="fix">{list.ZAR}</span>
                    </li>
                    <li>
                        <span className="fix-flag">
                            <img src={ind}></img>
                        </span>
                        <span className="fix">INR</span>
                        <span className="fix">{list.INR}</span>
                    </li>
                    <li>
                        <span className="fix-flag">
                            <img src={snp}></img>
                        </span>
                        <span className="fix">SGD</span>
                        <span className="fix">{list.SGD}</span>
                    </li>
                </ul>
            )}
        </section>
    );
};

export default LatestRates;
