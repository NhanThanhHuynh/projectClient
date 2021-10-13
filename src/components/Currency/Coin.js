import React from "react";
import "../../css/CoinCss.css";


const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <tbody>
      <tr className='text-dark'>
        <td>
          <img src={image} alt="crypto" className="imgfixed " />
        </td>
        <td>{name}</td>
        <td className="coin-symbol">{symbol}</td>
        <td className="coin-price">${price}</td>
        <td className="coin-volume">${volume.toLocaleString()}</td>
        <td>
          {priceChange < 0 ? (
            <h5 className="coin-percent red">{priceChange.toFixed(2)}%</h5>
          ) : (
            <h5 className="coin-percent green">{priceChange.toFixed(2)}%</h5>
          )}
        </td>
        <td>${marketcap.toLocaleString()}</td>
      </tr>
    </tbody>
  );
};

export default Coin;
