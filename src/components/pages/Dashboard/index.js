import {Row,Col} from 'antd';
import CalorieTracker from '../../CalorieTrack';
import Macronutrients from '../../Macronutrients';
import WeeklyProgress from '../../WeeklyProgress';


const Dashboard =() => {
    return (
      <>
        <Row gutter={[32,32]}>
            <Col span={15}>
                <CalorieTracker/>
            </Col>
            <Col span={9}>
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