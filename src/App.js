import { useEffect, useState } from 'react' 
import './App.css'
import SingleCoffee from './SingleCoffee';


function App() {
const [data, setData] = useState([{ name: 'Colada', price: '40cents' }])

useEffect(() => {
  getCoffeeForEddie()
}, [])


  const getCoffeeForEddie = () => {
    fetch('https://api.sampleapis.com/coffee/hot')
    .then( response => response.json())//convert to JSON 
    .then( data => console.log(data)) //get formatted data
    .catch (x => console.error(x)); //Each one of these need a callback function  
  }

  console.log ('my data, data')

  return (

  <div className='App'>
    <main>
      <h1>Coffees by Sample API</h1>
      <button onClick={() => getCoffeeForEddie()}>Get me Coffees</button>
      <div className='menu-items'>
        {data.map(item => {
          console.log('each item', item)
          return <SingleCoffee entireObject={item} />
        })}
      </div>
    </main> 
  </div>
  )
      }

export default App
// A double underscore on line 20 means BEM = Block Element Modifier but the element will have the same name inside, one set of items is inside of another item Class. The 2 underscores tell you there is a child.