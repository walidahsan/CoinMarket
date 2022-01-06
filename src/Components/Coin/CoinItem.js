import axios from "axios";
import { useEffect } from "react";
import "../../Css/coinItem.css";
function CoinItem({
  coinId,
  symbol,
  coinImage,
  name,
  priceChange,
  marketRank,
  price,
  marketCap,
  marketChange,
  totalVolume,
  ciculatingSupply,
}) {
  //   const newCoinId = coinId;
  //   useEffect(() => {
  //     axios
  //       .get(`https://api.coingecko.com/api/v3/coins/${newCoinId}`)
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);
  //   console.log(priceChange);
  return (
    <>
      <td className="coin_market">{marketRank}</td>
      <td>
        <img className="Coin_image" src={coinImage} height={60} />
      </td>
      <td className="coin_div">{name}</td>
      <td className="coin_symbol">{symbol}</td>
      <td>${price.toLocaleString()}</td>
      {priceChange < 0 ? (
        <td className="red">{priceChange.toFixed(2)}%</td>
      ) : (
        <td className="green">{priceChange.toFixed(2)}%</td>
      )}

      <td>${marketCap.toLocaleString()}</td>
      {marketChange < 0 ? (
        <td className="red">{marketChange.toFixed(2)}%</td>
      ) : (
        <td className="green">{marketChange.toFixed(2)}%</td>
      )}
      <td>${totalVolume.toLocaleString()}</td>
      <td>{ciculatingSupply.toLocaleString()}</td>
    </>
  );
}

export default CoinItem;
