import React, { useCallback, useEffect, useRef, useState } from 'react';

export default function App() {
  const [password, setPassword] = useState("");
  const [charAllowed, setCharallowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [Length,setLength] = useState(8)

  const copyPassword = useRef();


  const PasswordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass = ""

    if(numberAllowed) {
      str += "0123456789"
    }
    if(charAllowed) {
      str += "`~!@#$%^&*()_"
    }

    for(let i = 1; i <= Length; i ++) {
      let char = Math.floor(Math.random() * str.length + 1 );

      pass += str.charAt(char);
    }

    setPassword(pass)
  },[numberAllowed,charAllowed,Length,setPassword])

  const copyPasswordToClipBoard = useCallback(() => {
    copyPassword.current.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    PasswordGenerator();
  },[numberAllowed,charAllowed,Length,PasswordGenerator])

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-900 text-white'>
      <div className='bg-gray-800 p-6 rounded-xl shadow-lg w-96'>
        <h1 className='text-xl font-bold mb-4 text-center'>Password Generator</h1>
        
        <div className='relative mb-4'>
          <input 
            type='text' 
            value={password} 
            ref={copyPassword}
            readOnly 
            className='w-full p-3 rounded-lg bg-gray-700 text-white outline-none' 
            placeholder='Generated password'
          />
          <button 
            onClick={copyPasswordToClipBoard}
          className=' cursor-pointer absolute right-3 top-3 bg-blue-600 px-3 py-1 rounded-lg text-sm hover:bg-blue-700'
          >Copy</button>
        </div>
        
        <div className='mb-4'>
          <label className='block text-sm mb-1'>Password Length</label>
          <input 
            type='range' 
            min={8}
            max={100}
            value={Length}
            className='cursor-pointer w-full accent-blue-600'
            onChange={(e) => setLength(e.target.value)}
          />
          <label >Length : {Length}</label>
        </div>
        
        <div className='flex items-center justify-between'>
          <label className='flex items-center gap-2'>
            <input 
            type='checkbox'
            className='accent-blue-600' 
            defaultChecked={charAllowed}
            onChange={() => setCharallowed((prev) => !prev)}
          /> Include Characters
          </label>
          <label className='flex items-center gap-2'>
            <input 
            type='checkbox'
            className='accent-blue-600'
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}

          /> Include Numbers
          </label>
        </div>
      </div>
    </div>
  );
}