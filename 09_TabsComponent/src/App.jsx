import Tabs from './Components/Tabs'
import './App.css'

const tabsData = [
  {
    label: 'Personal Info',
    content : <div>Profile Info Content</div>
  },
  {
    label : 'Dashboard',
    content : <div>Dashboard Content</div>
  },
  {
    label : 'Settings',
    content : <div>Setting Content</div>
  },
  {
    label : 'Invoice',
    content : 'Invoice Content'
  },
]

function App() {
  

  return (
    <>
      <Tabs tabsData={tabsData} />
    </>
  )
}

export default App
