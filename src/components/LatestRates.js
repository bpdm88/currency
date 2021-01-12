import { useEffect, useState } from "react";
import axios from "axios";

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
            <ul>
                <li>USD</li>
                <li>EUR</li>
                <li>JPY</li>
                <li>CAD</li>
                <li>AUD</li>
            </ul>
        </section>
    );
};

export default LatestRates;
