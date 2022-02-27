import { Modal,Input } from "antd";

const AddMeals = ({visible,setVisible,meals,setMeals,mealNo,setMealNo}) =>{
    const {Search} = Input;
    const handleOk = () => {
        setMeals([...meals,{
            id:mealNo,
            name:`Meal ${mealNo}`,
            items:[
                {
                    name:"Eggs",
                    protein:6,
                    carbs:20,
                    fats:10,
                    unit:"Whole egg",
                    quantity:2
                }
            ]
        }])
        setMealNo(mealNo+1);
        setVisible(false);
    };

    const handleCancel = () => {
        setVisible(false);
    };
    const onSearch = value => console.log(value);

    return(
        <>
            <Modal title="Select your food" visible={visible} onOk={handleOk} onCancel={handleCancel}>
                <Search placeholder="input search text" onSearch={onSearch} style={{ width: '100%' }} />
            </Modal>
        </>
    )
}
export default AddMeals;