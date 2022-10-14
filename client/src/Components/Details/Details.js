import React from "react";
import { useParams } from "react-router-dom";
import '../../App.css';

function Details(props) {

    const { id } = useParams();

    const [item, setItem] = React.useState(false);
    const [loaded, isLoaded] = React.useState(false);
    React.useEffect(() => {
        fetch(`http://localhost:8080/coins/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data)
                console.log(data)
                isLoaded(true);
            });
    }, []);


    return (
        (loaded ?
            <div className="detailsContainer">
                <div className="topCont">
                    <img src={item.image.large} className="imgDetails" />
                    <h1 style={{ fontSize: 50 }}>{item.name}</h1>
                    <h1>({item.symbol})</h1>
                </div>

                <div className="valueCont">
                    <label>Current Value :</label>
                    <h1>{item.market_data.current_price.usd} $</h1>

                    <div className="valueChanges">
                        <div className="value">
                            <label>Highest Price Last Day :</label>
                            <h3>{item.market_data.high_24h.usd} $</h3>
                        </div>
                        <div className="value">
                            <label>Lowest Price Last Day :</label>
                            <h3>{item.market_data.low_24h.usd} $</h3>
                        </div>
                    </div>

                    <h1>Price Changes</h1>
                    <div className="valueChanges">
                        <div className="value">
                            <label>Last 24h :</label>
                            {item.market_data.price_change_percentage_60d > 0 ?
                                <h3 style={{ color: 'green' }}>{item.market_data.price_change_percentage_24h} %</h3>
                                :
                                <h3 style={{ color: 'red' }}>{item.market_data.price_change_percentage_24h} %</h3>
                            }
                        </div>
                        <div className="value">
                            <label>Last 7 Days :</label>
                            {item.market_data.price_change_percentage_60d > 0 ?
                                <h3 style={{ color: 'green' }}>{item.market_data.price_change_percentage_7d} %</h3>
                                :
                                <h3 style={{ color: 'red' }}>{item.market_data.price_change_percentage_7d} %</h3>
                            }
                        </div>
                        <div className="value">
                            <label>Last 14 Days :</label>
                            {item.market_data.price_change_percentage_60d > 0 ?
                                <h3 style={{ color: 'green' }}>{item.market_data.price_change_percentage_14d} %</h3>
                                :
                                <h3 style={{ color: 'red' }}>{item.market_data.price_change_percentage_14d} %</h3>
                            }
                        </div>
                        <div className="value">
                            <label>Last 1 Month :</label>
                            {item.market_data.price_change_percentage_60d > 0 ?
                                <h3 style={{ color: 'green' }}>{item.market_data.price_change_percentage_30d} %</h3>
                                :
                                <h3 style={{ color: 'red' }}>{item.market_data.price_change_percentage_30d} %</h3>
                            }
                        </div>
                        <div className="value">
                            <label>Last 2 months :</label>
                            {item.market_data.price_change_percentage_60d > 0 ?
                                <h3 style={{ color: 'green' }}>{item.market_data.price_change_percentage_60d} %</h3>
                                :
                                <h3 style={{ color: 'red' }}>{item.market_data.price_change_percentage_60d} %</h3>
                            }
                        </div>
                        <div className="value">
                            <label>Last 200 Days :</label>
                            {item.market_data.price_change_percentage_200d > 0 ?
                                <h3 style={{ color: 'green' }}>{item.market_data.price_change_percentage_200d} %</h3>
                                :
                                <h3 style={{ color: 'red' }}>{item.market_data.price_change_percentage_200d} %</h3>
                            }
                        </div>
                        <div className="value">
                            <label>Last 1 Year :</label>
                            {item.market_data.price_change_percentage_1y > 0 ?
                                <h3 style={{ color: 'green' }}>{item.market_data.price_change_percentage_1y} %</h3>
                                :
                                <h3 style={{ color: 'red' }}>{item.market_data.price_change_percentage_1y} %</h3>
                            }
                        </div>
                    </div>
                </div>

                <h3>Coin Description</h3>
                <div className="descr">
                    {item.description.en}
                </div>
            </div>
            :
            <div className="detailsContainer">
                <h1>Loading Data ...</h1>
            </div>

        )
    );
}

export default Details;
