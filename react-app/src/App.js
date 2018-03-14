import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const API = '/api/';
const DEFAULT_QUERY = 'get_data';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
		};
	}

	componentDidMount() {
		fetch(API + DEFAULT_QUERY)
		.then(response => response.json())
		.then(data => this.setState({ data: data }))
		.then(()=>{console.log(this.state)});
	}

	componentWillMount(){
		
	}

	render() {
		const { data } = this.state;
		console.log(data)
		return (




			<div id='root' className="App">
			<div id="data" className="row">
			{data.map(object =>
				//FOREACH
				<div className="col-*" style={{margin:'auto'}} >

				<table className="table table-bordered">

				<thead>
				<tr>{object.room_name}</tr>
				<tr>
				<th>Time</th>
				<th>Temperature</th>
				<th>Humidity</th>
				</tr>
				</thead>

				<tbody>
				{object.datas.map(data=>
					<tr>
					<td>{data.date}</td>
					<td>{data.temperature}</td>
					<td>{data.humidity}</td>
					</tr>

					)}
				
				</tbody>

				</table>
				</div>



				)}
			</div>
			</div>
			);
	}
}

export default App;
