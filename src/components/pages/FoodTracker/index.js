import { Button, Card, Col, Row, Space, Typography } from "antd"
import { useState } from "react"
import AddMeals from "./AddMeals"
const {Text} = Typography

const FoodTracker =()=>{
    const [meals,setMeals] = useState([])
    const [mealNo,setMealNo] = useState(1);
    const [visible,setVisible] = useState(false);
    const addMeal = () =>{
        setVisible(true);
        
    }
    const showMealItems = (items) => {
        return items.map(item => {
            return (
                <Space direction="vertical">
                    <Text>{item.name}</Text>
                    <Text>Protein: {item.protein}</Text>
                    <Text>Carbs: {item.carbs}</Text>
                    <Text>Fats: {item.fats}</Text>
                </Space>
            )
        })
    }
    const showMeals =()=>{
        if(meals.length){
            return meals.map(meal=>{
                return(
                    <Col span={24}>
                    <Card key={meal.id}>
                        <h1>{meal.name}</h1>
                        {showMealItems(meal.items)}
                    </Card>
                    </Col>
                )
            })
        }else{
            return "You havent added any meals yet"
        }
    }
    return(
        <>
            <Card style={{minHeight:'100vh'}} title="Track your meals">
                <Button type="primary" onClick={addMeal}> Add meal</Button>
                <Row gutter={[24,10]} style={{margin:'10 0'}}>
                    {showMeals()}
                </Row>
            </Card>
            <AddMeals
                visible={visible}
                setVisible={setVisible}
                meals={meals}
                setMeals={setMeals}
                mealNo={mealNo}
                setMealNo={setMealNo}
            />
        </>
    )
}
export default FoodTracker