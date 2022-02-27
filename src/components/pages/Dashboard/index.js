import { useState } from 'react';
import {Row,Col,Card } from 'antd';
import CalorieTracker from '../../CalorieTrack';
import Macronutrients from '../../Macronutrients';
import WeeklyProgress from '../../WeeklyProgress';


const Dashboard =() => {
    return (
      <>
        <Row gutter={[32,32]}>
            <Col span={12}>
                <CalorieTracker/>
            </Col>
            <Col span={12}>
                <Macronutrients/>
            </Col>
            <Col span={24}>
                <WeeklyProgress/>
            </Col>
        </Row>
      </>
    );
  }


export default Dashboard;