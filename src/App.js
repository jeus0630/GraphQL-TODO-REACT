import logo from './logo.svg';
import './App.css';
import {useQuery, gql, useMutation} from "@apollo/client";

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
    const {error, loading, data} = useQuery(GET_TEST);
    console.log(data);

    useMutation()
    return (
        <div className="App">
            <input type="text"/>
            <button onClick={clickHandler}>submit</button>
        </div>
    );
}

export default App;
