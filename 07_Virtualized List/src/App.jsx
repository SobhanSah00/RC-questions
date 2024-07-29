import './App.css'
import VirtualizedList from './components/VirtualizedList'

const List = Array.from({length : 10000},(_,index) => (index + 1))
// console.log(List);

function App() {
  
  return (
    <>
      <VirtualizedList 
        List={List} 
        ContainerHeight = {400}
        ContainerWidth ={300}
        ItemHeight={30} 
      />
    </>
  )
}

export default App
