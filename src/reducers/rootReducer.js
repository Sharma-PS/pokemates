const initState = {
    posts : [
        {id:1, title:"Sharma", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, aspernatur quae repellat provident corporis possimus ratione error nihil. Provident officia, at quibusdam vitae asperiores voluptates sunt quaerat laborum tempora perspiciatis."},
        {id:2, title:"Kayathiri", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, aspernatur quae repellat provident corporis possimus ratione error nihil. Provident officia, at quibusdam vitae asperiores voluptates sunt quaerat laborum tempora perspiciatis."},
        {id:3, title:"Weds", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, aspernatur quae repellat provident corporis possimus ratione error nihil. Provident officia, at quibusdam vitae asperiores voluptates sunt quaerat laborum tempora perspiciatis."},
    ],
}
const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;