import { useState } from "react";
import { Card, Progress } from "antd";
const CalorieTracker = () =>{
    const [cal,setCal] = useState(1100);
    const [totalCal,setTotalCal] = useState(3000);
    const [percent,setPercent] = useState(100*cal/totalCal)
    return(
        <Card title="Calorie Tracker">
            {/* <Card.Grid hoverable={false} style={{width:'100%',textAlign:'center'}}> */}
            <Progress type="circle" percent={percent} format={percent => `${cal} Cals`} 
                // strokeWidth={10}
                width={200}
            />
            {/* </Card.Grid> */}
        </Card>
    )
}
export default CalorieTracker;