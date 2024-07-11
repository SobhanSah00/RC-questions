import Pagination from "./Pagination"
import {useState , useEffect } from "react"
import axios from "axios"

function PagePost() {
  const [data,setData] = useState([])
  const [currentPage,setCurrentPage] = useState(1)
  // console.log(data);
  useEffect(() => {
    axios.get(`https://picsum.photos/v2/list?page=${currentPage}&limit=5`)
    .then((res) => {setData(res.data)})

  },[currentPage])
  return (
    <div className="container">
        <div className="post-container">
            {
              data.map((item,index) => {
                return <img key={index} src={item.download_url} alt="" />
              })
            }
        </div>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default PagePost