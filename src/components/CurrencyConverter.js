import { useEffect } from "react";
import axios from "axios";

const CurrencyConverter = () => {
    useEffect(() => {
        axios({
            method: "GET",
            url:
                "https://free.currconv.com/api/v7/convert?q=USD_GBP&compact=ultra&apiKey=0940afb0a07457dbd415",
        }).then((response) => {
            console.log(response);
        });
    });

    return <h2>Did this work</h2>;
};

export default CurrencyConverter;
