import { useState } from "react";
import { useData } from "../hooks/useData";
import { useEmojiContext } from "../context/Emoji";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    // Exercise 3.
    const {mood, handleChangeMood} = useEmojiContext();

    // Exercise 1.
    const URL = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies="
    // Exercise 2.
    const {data, loading, error} = useData(URL + currency)
    // Exercise 1 & 2 end.

    const options = currencies.map(curr => 
    <option value={curr} key={curr}>{curr}</option>);

    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
                <select value={currency} onChange={e =>
                    setCurrency(e.target.value)
                }>
                    {options}
                </select>
            </label>
            {/* Exercise 1 & 2. */}
            <div>
                <strong>Price of Bitcoin: </strong>
                {loading && <span>Loading...</span>}
                {error && <span>Error: {error}</span>}
                {data?.bitcoin?.[currency.toLowerCase()]}
            </div>
            {/* Exercise 1 & 2 end. */}
            {/* Exercise 3. */}
            <div className="Emoji componentBox">
                <h2>Exercise 3</h2>
                Current Mood: {mood}
                <div>
                    <button onClick={handleChangeMood}>Change Mood</button>
                </div>
            </div>
            {/* Exercise 3 end. */}
        </div>
    )
}

export default BitcoinRates