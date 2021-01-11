import { useState } from "react";
import axios from "axios";

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
                <label>First</label>
                <input onChange={handleChangeFirst} value={first}></input>
                <label>Second</label>
                <input onChange={handleChangeSecond} value={second}></input>
                <button>Get Rate</button>
            </form>
        </section>
    );
};

export default CurrencyConverter;
