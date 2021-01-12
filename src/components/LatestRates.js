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
            <h2>Base Rate: GBP £1</h2>
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
