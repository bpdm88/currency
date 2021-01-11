import { useEffect } from "react";
import axios from "axios";

const LatestRates = () => {
    useEffect(() => {
        axios({
            method: "GET",
            url:
                "https://v6.exchangerate-api.com/v6/b2ff8db2977c244d5c41f000/latest/USD",
        }).then((response) => {
            console.log(response.data.conversion_rates);
        });
    });

    return <h2>Hello again</h2>;
};

export default LatestRates;
