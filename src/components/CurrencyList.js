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
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
            </select>
        </>
    );
};

export default CurrencyList;
