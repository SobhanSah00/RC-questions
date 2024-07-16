
import './App.css'
import FileExplorer from './components/FileExplorer'
import folderData from './data.json'

function App() {


  return (
    <>
      <FileExplorer folderData={folderData} />
    </>
  )
}

export default App
