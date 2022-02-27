import { Card, Progress, Space } from "antd";
const macros = [
    {
        name:"Protein",
        value:30,
        color:""
    },
    {
        name:"Carbs",
        value:30,
        color:""
    },
    {
        name:"Fats",
        value:30,
        color:""
    },
    // {
    //     name:"Protein",
    //     value:30,
    //     color:""
    // },
    // {
    //     name:"Carbs",
    //     value:30,
    //     color:""
    // },
    // {
    //     name:"Fats",
    //     value:30,
    //     color:""
    // },
]

const macroProgress = macros.map(macro => {
    return (
        <Progress
        key={macro.name}
        percent={macro.value}
        format={percent => macro.name}
        strokeWidth={10} width={200}/>
    )
})
const Macronutrients = () =>{
    return(
        <Card title="Macronutrients">
        {/* <Space direction="vertical"> */}
            <div style={{ width: '100%' }}>
                
                    {macroProgress}
                
            </div>
            {/* </Space> */}
        </Card>
    )
}
export default Macronutrients;