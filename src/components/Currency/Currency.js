import React, { useState, useEffect } from "react";
import axios from "axios";
import { top100coin_api } from "../../constants/Currency";
import "../../css/CurrencyCss.css";
import Coin from "./Coin";
import { Table, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Currency = () => {
  //lam them 2 cai nut back ve
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function FetechDta() {
      const response = await axios.get(top100coin_api);

      try {
        if (response.data) {
          setCoins(response.data);
        } else {
          alert("failed to get data");
        }
      } catch (error) {
        console.log("Interval server error", error);
      }
    }
    FetechDta();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container fluid>
      <Row>
        <Col xl="12" sm="12" md="12">
          <div className="coin-app">
            <div className="coin-search">
              <h1 className="coin-text">Search a currency</h1>
              <form>
                <input
                  className="coin-input"
                  type="text"
                  onChange={handleChange}
                  placeholder="Search"
                />
              </form>
              <div className="mt-3 BackPage">
                <Link to="/learning">BACK TO HOME PAGE</Link>
              </div>
            </div>
          </div>
        </Col>
        <Col xl="12" sm="12" md="12">
          <Table responsive="sm">
            <thead>
              <tr className="text-dark">
                <th>COIN</th>
                <th>NAME</th>
                <th>SYMBOL</th>
                <th>PRICE</th>
                <th>VOLUME</th>
                <th className="text-nowrap">PRICE CHANGE</th>
                <th> MKT CAP</th>
              </tr>
            </thead>
            {filteredCoins.map((coin) => {
              return (
                <Coin
                  key={coin.id}
                  name={coin.name}
                  price={coin.current_price}
                  symbol={coin.symbol}
                  marketcap={coin.total_volume}
                  volume={coin.market_cap}
                  image={coin.image}
                  priceChange={coin.price_change_percentage_24h}
                />
              );
            })}
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Currency;
