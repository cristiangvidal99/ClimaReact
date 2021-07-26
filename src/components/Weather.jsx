import React from 'react'
import PropTypes from 'prop-types';


const Weather = ({result}) => {

    // extract the data
    const {name, main} = result;

    // previene que este componente cargue
    if(!name) return null;

    // 
    const kelvin = 273.15;
    return ( 
        <div className='card-panel white col s12'>
            <div className='black-text'>
                <h2>The climate of {name} is:</h2>
                <p className='temp'>
                    {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                </p>
                <p> Temp min:
                    {parseFloat(main.temp_min - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                </p>
                <p> Temp max:
                    {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                </p>
            </div>
        </div>
    );
}

Weather.propTypes = {
    result: PropTypes.object.isRequired
}

export default Weather;