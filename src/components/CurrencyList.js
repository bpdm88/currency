const CurrencyList = ({ name, handleChange, value }) => {
    return (
        <>
            <label>{name}</label>
            <select
                onChange={handleChange}
                value={value}
                htmlFor={name}
                id={name}
            >
                <option value="">-- select an option --</option>
                <option value="AUD">AUD</option>
                <option value="BRL">BRL</option>
                <option value="CAD">CAD</option>
                <option value="CHF">CHF</option>
                <option value="CNY">CNY</option>
                <option value="DKK">DKK</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="HKD">HKD</option>
                <option value="JPY">JPY</option>
                <option value="INR">INR</option>
                <option value="MXN">MXN</option>
                <option value="NOK">NOK</option>
                <option value="NZD">NZD</option>
                <option value="RUB">RUB</option>
                <option value="SEK">SEK</option>
                <option value="SGD">SGD</option>
                <option value="USD">USD</option>
                <option value="ZAR">ZAR</option>
            </select>
        </>
    );
};

export default CurrencyList;
