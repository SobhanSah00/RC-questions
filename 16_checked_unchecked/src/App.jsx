import React,{useState} from 'react'
import './App.css'

function App() {
  const [country,setCountry] = useState([
    {
      name : "India",checked : false
    },
    {
      name : "Pakistan",checked : false
    },
    {
      name : "Srilanka",checked : false
    }

  ])

  const checkClickHandler = (index) => {
    country[index].checked = !country[index].checked
    setCountry([...country])
  }

  const deleteCountry = (index) => {
    // setCountry(country.filter((item,index) => !item.checked))
    country.splice(index,1)
    setCountry([...country])
  }
  return (
    <div>
      <h1>Country List</h1>
      <ul style={{listStyle:'none'}}>
        {
          country.map((value,index) => {
            return (
            <div key={index} style={{display: 'flex'}}>
              <input type="checkbox" checked={value.checked}
              onClick={() => checkClickHandler(index)}
              />
              <li>
                {value.name}{" "}{value.checked ? <span onClick={(index) => deleteCountry()}>❌</span> : ""}
              </li>
            </div>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App