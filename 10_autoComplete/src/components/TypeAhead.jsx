import { useEffect, useRef, useState } from 'react';
import { STATE } from '../constants';


function TypeAhead() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState(null);
  const [result, setResult] = useState([]);

  const chache= useRef({})

    useEffect(() => {

        const abortController = new AbortController();
        const signal = abortController.signal;

        if (query === '') {
            setResult([]);
            return;
        }

        const fetchData = async () => {
            setStatus(STATE.loading);
            try {

                if(chache.current[query]) {
                    console.log('retived from cache');
                    setResult(chache.current[query])
                }

                const response = await fetch(`https://dummyjson.com/products/search?q=${query}&limit=10`,{signal});
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setStatus(STATE.success);
                chache.current[query] = data.products;
                setResult(data.products);
            } 
            catch (error) {
                console.log(error);
                if(error.name !== 'AbortError') {
                    setStatus(STATE.error)
                }
                // setStatus(STATE.error);
            }
        };

        const timerId = setTimeout(fetchData,1000)
        // console.log(timerId);
        // fetchData();
        return (
            () => {
                clearTimeout(timerId);
                abortController.abort();
                // console.log(timerId);
            }
        )
    }, [query]);

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      {status === STATE.loading && <p>Loading...</p>}
      {status === STATE.error && <p>Error fetching data</p>}
      {status === STATE.success && (
        <ul>
          {result.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TypeAhead;
