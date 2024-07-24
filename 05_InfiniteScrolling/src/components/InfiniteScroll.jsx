import { useState,useEffect } from "react"
import Post from "./Post"


function InfiniteScroll() {
    const [data,setData] = useState([])
    const [page,setPage] = useState(1)

    useEffect(() => {
        fetch(`https://picsum.photos/v2/list?page=${page}&limit=3`)
        .then((res) => {
            return res.json()
        })
        .then((arr) => {
            setData((oldData) => {
                return [...oldData,...arr]
            })
        })
    },[page])


  return (
    <Post data={data} setData={setData} />
  )
}

export default InfiniteScroll