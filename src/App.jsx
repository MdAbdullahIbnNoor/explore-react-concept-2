import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {
  // const [count, setCount] = useState(0)
  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 = () =>{
    alert('button2 clicked')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }
   return (
    <>
      <h3>React Core Concept 2</h3>

      <Friends> </Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me 2</button>
      <button onClick={() => {alert('third button clicked')}}>third</button>
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
