import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../../App.css';

function ListItem(props) {

    let navigate = useNavigate();
    const { id } = useParams();

    return (
        <div className='listItem' onClick={() => { navigate('/details/' + props.item.id) }}>
            <img src={props.item.image} className='itemLogo' />
            <div>
                <h2 className='curName'>{props.item.name}</h2>
                <div className='priceChangeCont'>
                    <div className='priceChangeInfo'>
                        <label className='priceChangeLabel'>Top Price Latest 24 Hours:</label>
                        <h5 className='priceChangeTop'>{props.item.high_24h}</h5>
                    </div>
                    <div className='priceChangeInfo'>
                        <label className='priceChangeLabel'>Lowest Price Latest 24 Hours:</label>
                        <h5 className='priceChangeLow'>{props.item.low_24h}</h5>
                    </div>
                    <div className='priceChangeInfo'>
                        <label className='priceChangeLabel'>Percentage change:</label>
                        {props.item.price_change_percentage_24h > 0 ?
                            <h5 className='priceChangePercent' style={{ color: 'green' }}>{props.item.price_change_percentage_24h} %</h5>
                            :
                            <h5 className='priceChangePercent' style={{ color: 'red' }}>{props.item.price_change_percentage_24h} %</h5>
                        }
                    </div>
                </div>
            </div>
            <h1>{props.item.current_price} $</h1>
        </div>
    );
}

export default ListItem;
