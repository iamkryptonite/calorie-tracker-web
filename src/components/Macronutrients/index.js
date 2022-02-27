import { Card, Progress } from "antd";
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
            <div style={{ width: '70%' }}>
                {macroProgress}
            </div>
        </Card>
    )
}
export default Macronutrients;