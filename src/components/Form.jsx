import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Form = ({search, saveSearch, saveConsult}) => {

    const [error, saveError] = useState(false);
    const {city, country} = search;

    // Function that places the elements in the state
    const handleChange = e => {
        // updating the state
        saveSearch({
            ...search,
            [e.target.name] : e.target.value
        });
    }

    // when the users presses the submit button
    const handleSubmit = e => {
        e.preventDefault();

        // Validation
        if(city.trim() === '' || country.trim() === '') {
            saveError(true);
            return;
        }
        saveError(false);
        saveConsult(true);
    }
    return ( 
        <form
            onSubmit={handleSubmit}
        >

            {error ? <Error message='Ambos Campos son obligatorios' /> : null}

            <div className='input-field col s12'>
                <input
                    type='text'
                    name='city'
                    id='city'
                    value={city}
                    onChange={handleChange}
                />
                <label htmlFor='city'>City:</label>
            </div>

            <div className='input-field col s12'>
                <select
                    name='country'
                    id='country'
                    value={country}
                    onChange={handleChange}
                >
                    <option value="">-- Select a country --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor='country'>Country:</label>

               <div className='input-field col s12'>
                   <button 
                        type='submit'
                        value='Search'
                        className='waves-effect waves-light btn btn-large btn-block yellow accent-4 w-100'
                    >Search</button>
               </div>
            </div>
        </form>
    );
}
Form.propTypes = {
    search: PropTypes.object.isRequired,
    saveSearch: PropTypes.func.isRequired,
    saveConsult: PropTypes.func.isRequired
}
export default Form;