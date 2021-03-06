import { useState } from "react";
import axios from "axios";
import CurrencyList from "./CurrencyList";

const CurrencyConverter = () => {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [rate, setRate] = useState([]);
    const [display, setDisplay] = useState(false);

    const getRate = (e) => {
        e.preventDefault();
        axios({
            method: "GET",
            url: `https://free.currconv.com/api/v7/convert?q=${first}_${second}&compact=ultra&apiKey=0940afb0a07457dbd415`,
        }).then((response) => {
            console.log(response.data);
            setRate(response.data);
            setDisplay(true);
        });
    };

    const handleChangeFirst = (e) => {
        setFirst(e.currentTarget.value);
        setDisplay(false);
    };

    const handleChangeSecond = (e) => {
        setSecond(e.currentTarget.value);
        setDisplay(false);
    };

    return (
        <section className="converter">
            <h2 className="heading--bravo">Converter</h2>
            <p>
                Pick a currency pair to check out the latest exchange rate for
                the currencies. Currency rates are updated every 24 hours with
                new exchange rates.
            </p>
            <form onSubmit={getRate}>
                <CurrencyList
                    name="From"
                    handleChange={handleChangeFirst}
                    value={first}
                />
                <CurrencyList
                    name="To"
                    handleChange={handleChangeSecond}
                    value={second}
                />
                <button>
                    <span>Get Rate</span>
                </button>
            </form>
            {!display ? null : (
                <p>
                    Exchange Rate: 1 {first} = {rate[`${first}_${second}`]}{" "}
                    {second}{" "}
                </p>
            )}
        </section>
    );
};

export default CurrencyConverter;
