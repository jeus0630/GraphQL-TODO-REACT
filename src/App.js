import logo from './logo.svg';
import './App.css';
import {useQuery, gql, useMutation} from "@apollo/client";
import {useState} from "react";

const GET_TEST = gql`
    query{
        todos
    }
`

const POST_TODO = gql`
    mutation($description: String!){
        createTodo(description: $description)
    }
`

function App() {

    const [val, setVal] = useState('');
    const [addToDo,{error, loading,data}] = useMutation(POST_TODO);

    const changeHandler = (e) => {
        const {value} = e.target;
        setVal(value);
    }
    return (
        <div className="App">
            <input type="text" onChange={changeHandler}/>
            <button onClick={()=>{addToDo({variables : {description : val}})}}>submit</button>
        </div>
    );
}

export default App;
