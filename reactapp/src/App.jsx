import {  useState, useEffect, useMemo } from 'react';
import './App.css'

// convert the above to a functional component
export default function App() {
    const spinningWheel = <p><em><i className='fa fa-spinner fa-spin'></i> Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>;
    
    const [forecasts, setForecasts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [contents, setContents] = useState(spinningWheel);
    
    useEffect(() => {
        async function populateWeatherData() {
            const response = await fetch('weatherforecast');
            const data = await response.json();
            setForecasts(data);
            setLoading(false);
        }
        populateWeatherData();
    }, []);

    useEffect(() => {
        function renderForecastsTable(forecasts) {
            return (
                <table className='table table-striped' aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Temp. (C)</th>
                            <th>Temp. (F)</th>
                            <th>Summary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {forecasts.map(forecast =>
                            <tr key={forecast.date}>
                                <td>{forecast.date}</td>
                                <td>{forecast.temperatureC}</td>
                                <td>{forecast.temperatureF}</td>
                                <td>{forecast.summary}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            );
        }

        setContents(renderForecastsTable(forecasts));
    }, [forecasts]);

    return (
        <div>
                <h1 id="tabelLabel" className='' ><i className='fa-weather'></i> Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>

                {loading?spinningWheel:contents}
        </div>
        
    );
}