import { useState } from "react";
import axios from "axios";
import CurrencyList from "./CurrencyList";

const CurrencyConverter = () => {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");

    const getRate = (e) => {
        e.preventDefault();
        axios({
            method: "GET",
            url: `https://free.currconv.com/api/v7/convert?q=${first}_${second}&compact=ultra&apiKey=0940afb0a07457dbd415`,
        }).then((response) => {
            console.log(response.data);
        });
    };

    const handleChangeFirst = (e) => setFirst(e.currentTarget.value);

    const handleChangeSecond = (e) => setSecond(e.currentTarget.value);

    return (
        <section>
            <h2>Currency Pair!!!</h2>
            <form onSubmit={getRate}>
                <CurrencyList
                    name="First"
                    handleChange={handleChangeFirst}
                    value={first}
                />
                <CurrencyList
                    name="Second"
                    handleChange={handleChangeSecond}
                    value={second}
                />
                <button>Get Rate</button>
            </form>
        </section>
    );
};

export default CurrencyConverter;
