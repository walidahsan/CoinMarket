import axios from "axios";
import { useEffect, useState } from "react";
import CoinItem from "./CoinItem";
import "../../Css/Coin.css";
import loadergif from "../../loader1.gif";

function Coin() {
  const [coins, setcoins] = useState([]);
  const [search, setsearch] = useState("");
  const [loader, setloader] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setcoins(res.data);
        // console.log(res.data
      });
    setloader(false);
  }, []);
  const FilteredData = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
    // coin.symbol.toLowerCase().includes(search.toLowerCase())
  });
  const CoinData = FilteredData.map((coin) => {
    return (
      <tbody key={coin.id} className="coin_body">
        <tr>
          <CoinItem
            coinId={coin.id}
            marketRank={coin.market_cap_rank}
            coinImage={coin.image}
            name={coin.name}
            symbol={coin.symbol}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketCap={coin.market_cap}
            marketChange={coin.market_cap_change_percentage_24h}
            totalVolume={coin.total_volume}
            ciculatingSupply={coin.circulating_supply}
          />
        </tr>
      </tbody>
    );
  });

  const newSearch = (e) => {
    setsearch(e.target.value);
  };
  const coinloader = <div className="loader"></div>;
  return (
    <div className="">
      <div className="Front">
        <h2>Coin Market</h2>
        <input
          className="coin_search"
          placeholder="Search Coins"
          value={search}
          onChange={newSearch}
        />
        {loader ? <div className="loader"></div> : <></>}
      </div>
      <div className="coin_Table">
        <table>
          <tr className="table_heading">
            <th>#</th>
            <th>icon</th>
            <th>
              Name <i className="fas fa-trademark tm"></i>
            </th>
            <th>symbol</th>
            <th>
              Price <i className="fas fa-dollar-sign"></i>
            </th>
            <th>Price Change 24h</th>
            <th>MarketCap</th>
            <th>MarketCap Change 24h</th>
            <th>
              Volume <i class="fas fa-chart-line"></i>
            </th>
            <th>
              Circulating Supply <i class="fas fa-circle-notch"></i>
            </th>
          </tr>
          {CoinData.length > 0 ? (
            CoinData
          ) : (
            <div>
              <h4 className="noData">Oops no data found</h4>
              <div className="loader"></div>
            </div>
          )}
        </table>
        {/* {(CoinData.length = 0 ? <img src={loader} /> : <></>)} */}
      </div>
    </div>
  );
}

export default Coin;
