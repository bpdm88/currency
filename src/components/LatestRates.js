import { useEffect, useState } from "react";
import axios from "axios";

const LatestRates = () => {
    const [list, setList] = useState();

    useEffect(() => {
        axios({
            method: "GET",
            url:
                "https://v6.exchangerate-api.com/v6/b2ff8db2977c244d5c41f000/latest/GBP",
        }).then((response) => {
            console.log(response.data.conversion_rates);
            setList(response.data.conversion_rates);
        });
    }, []);

    const test = () => {
        console.log(list.AED);
    };

    return <button onClick={test}>Click</button>;
};

export default LatestRates;
