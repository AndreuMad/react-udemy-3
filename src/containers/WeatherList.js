import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/Chart';

class WeatherList extends Component {

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr>
                <td key={name}>
                    {name}
                </td>
                <td>
                    <Chart color={'orange'} units="C" data={temps} />
                </td>
                <td>
                    <Chart color={'green'} units="hPa" data={pressures} />
                </td>
                <td>
                    <Chart color={'black'} units="%" data={humidities} />
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);