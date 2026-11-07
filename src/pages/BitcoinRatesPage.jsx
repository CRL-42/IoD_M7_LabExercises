// Exercise 4.
import BitcoinRates from "../component/BitcoinRates"
import { Emoji } from "../context/Emoji";

export default function BitcoinRatesPage() {

return ( 
<div className="Homepage"> 
    <h1>Bitcoin Rates</h1>
    <Emoji>
      <BitcoinRates />
    </Emoji>
</div> ) 
}
// Exercise 4 end.