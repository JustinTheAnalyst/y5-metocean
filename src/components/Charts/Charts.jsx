import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import RestClient from '../../RestAPI/RestClient';
import AppURL from '../../RestAPI/AppURL';

class Charts extends Component {

    constructor(){
        super();
        this.state={
            data:[],
            data2:[
                    {
                        name: 'Page A',
                        uv: 4000,
                        pv: 2400,
                        amt: 2400,
                    },
                    {
                        name: 'Page B',
                        uv: 3000,
                        pv: 1398,
                        amt: 2210,
                    },
                    {
                        name: 'Page C',
                        uv: 2000,
                        pv: 9800,
                        amt: 2290,
                    },
                    {
                        name: 'Page D',
                        uv: 2780,
                        pv: 3908,
                        amt: 2000,
                    },
                    {
                        name: 'Page E',
                        uv: 1890,
                        pv: 4800,
                        amt: 2181,
                    },
                    {
                        name: 'Page F',
                        uv: 2390,
                        pv: 3800,
                        amt: 2500,
                    },
                    {
                        name: 'Page G',
                        uv: 3490,
                        pv: 4300,
                        amt: 2100,
                    }
            ]
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppURL.ChartData).then(result=>{
            this.setState({data:result});
            
        })
    }

    render() {

        const {data} = this.state;

        const MaxHeight = Math.max(...data.map(data=>data.maximum_wave_height));

        var blue = "#2a80eb";

        

        return (
            <Fragment>
                <Container>
                    <h1 className="text-center mb-5">Maximum Wave Height vs Significant Wave Height vs Peak Wave Period</h1>
                    <Row className="mt-5">
                        <Col style={{width:'100%', height:'400px'}} lg={12} md={12} sm={12}>
                            <ResponsiveContainer>
                                <AreaChart
                                    width={500}
                                    height={400}
                                    data={data}
                                    >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis 
                                        dataKey="time"
                                        angle={-45} 
                                        scale="band"
                                     />
                                    <YAxis />
                                    <Legend />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="tm2" stroke="#1a1918" />
                                    <Area type="monotone" dataKey="significant_wave_height" stackId="1" stroke="#8884d8" fill="#8884d8" />
                                    <Area type="monotone" dataKey="peak_wave_period" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                                    <Area type="monotone" dataKey="maximum_wave_height" stackId="1" stroke="#ffc658" fill="#ffc658" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </Col>
                    </Row>
                    <Row className="mt-5 text-center">

                        <Col><p>Summary: Maximum wave height is {MaxHeight} m</p></Col>
                    </Row>
                    
                </Container>
            </Fragment>
        )
    }
}

export default Charts
