import { useEffect } from "react"


function Post({data,setData}) {
    useEffect(() => {
        const observer = new IntersectionObserver(() => {
            
        })
    },[data])
  return (
    <div className="container">
        {
            data.map((item) => {
                return <img key={item.id} src={item.download_url} alt="" />
            })
        }
    </div>
  )
}

export default Post