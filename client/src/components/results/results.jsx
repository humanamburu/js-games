import './_results.scss';

import React from 'react';

import { Row, Col, Card, Progress } from 'antd';
import { PieChart, Pie, RadialBarChart, RadialBar, Legend } from 'recharts';

const data01 = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
    {name: 'Group C', value: 300}, {name: 'Group D', value: 200}]

const data02 = [{name: 'A1', value: 100},
    {name: 'A2', value: 300},
    {name: 'B1', value: 100},
    {name: 'B2', value: 80},
    {name: 'B3', value: 40},
    {name: 'B4', value: 30},
    {name: 'B5', value: 50},
    {name: 'C1', value: 100},
    {name: 'C2', value: 200},
    {name: 'D1', value: 150},
    {name: 'D2', value: 50}];

const data = [
    {name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8'},
    {name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed'},
    {name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1'},
    {name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d'},
    {name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c'},
    {name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57'},
    {name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658'}
];

const style = {
    top: 0,
    left: 350,
    lineHeight: '24px'
};


export default class Results extends React.Component {
    render() {
        return (
            <Row className="results">
                <Row>
                    <h1>Game results</h1>
                </Row>
                <Row>
                    <Col className="card" span={6}>
                        <Card title="Total game progress">
                            <Progress type="circle" percent={75}/>
                        </Card>
                        <Card title="JavaScript course progress">
                            <Progress type="circle" percent={15} className="progress-purple"/>
                        </Card>
                    </Col>
                    <Col className="card" span={8}>
                        <Card title="Total progress">
                            <PieChart width={400} height={400}>
                                <Pie data={data01} cx={200} cy={200} outerRadius={60} fill="#8884d8"/>
                                <Pie data={data02} cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label/>
                            </PieChart>
                        </Card>
                    </Col>
                    <Col className="card" span={9}>
                        <Card title="Total progress">
                            <RadialBarChart width={800} height={200} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={data}>
                                <RadialBar minAngle={15} label background clockWise={true} dataKey='uv'/>
                                <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={style}/>
                            </RadialBarChart>
                        </Card>
                    </Col>
                </Row>
            </Row>
        );
    }
}
