import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';


function App() {

  const [search, saveSearch] = useState({
    city: '',
    country: ''
  });

  const [consult, saveConsult] = useState(false);
  const [result, saveResult] = useState({});
  const [error, saveError] = useState(false);
  const {city, country} = search;

  useEffect(() => {
    // to consult API
    const consultAPI = async () => {

      if(consult) {
        const appId = '08dc15791127cdd19a734206e94f9c22';

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

        const response = await fetch(url);
        const result = await response.json();

        saveResult(result);
        saveConsult(false);
        
        // detects if there were correct results in the query

        if(result.cod === '404') {
          saveError(true);
        } else {
          saveError(false);
        }
      }
    }
    consultAPI();
    // eslint-disable-next-line
  }, [consult]);

  let component;
  if(error) {
    component = <Error message='No hay resultados' />
  } else {
    component = <Weather result={result} />
  }
  return (

    <Fragment>
      <Header 
        title='Clima React App'
      />
      <div className='form-container'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Form 
              search={search}
              saveSearch={saveSearch}
              consult={consult}
              saveConsult={saveConsult}
              />
            </div>

            <div className='col m6 s12'>
              {component}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
