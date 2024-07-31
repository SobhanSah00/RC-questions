import PropTypes from "prop-types";
import {useState} from "react"
export default function StarRating({ starCount = 5 }) {
    const [starValue,setStarValue] = useState()
    console.log("star value" + starValue);
    const [hover, setHover] = useState(0);
    console.log(hover);
  return (
    <div className="Container">
        {
            new Array(starCount).fill(0).map((value,index) => {
                
                return (
                    <span className={hover === 0 && index < starValue ? 'gold' : index < hover ? 'gold' : ''}
                        onClick={() => setStarValue(index+1)} 
                        onMouseEnter={() => setHover(index + 1)}
                        onMouseLeave={() => setHover(0)}
                        key={index}>
                            &#9733;
                    </span>
                    
                )
                
            })
        }
    </div>
  );
}

StarRating.propTypes = {
  starCount: PropTypes.number.isRequired
};
