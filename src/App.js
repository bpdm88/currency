import Header from "./components/Header";
import CurrencyConverter from "./components/CurrencyConverter";
import LatestRates from "./components/LatestRates";

function App() {
    return (
        <div>
            <Header />
            <section className="content">
                <LatestRates />
                <CurrencyConverter />
            </section>
        </div>
    );
}

export default App;
