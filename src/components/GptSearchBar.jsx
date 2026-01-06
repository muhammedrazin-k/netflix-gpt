import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const language=useSelector((store)=>store.config?.lang)
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12 rounded-xl '>
            <input type="text" className=' p-4 m-4 col-span-9' placeholder={lang[language].gptSearchPlaceholder} />
            <button className='px-4 py-3 m-4 text-xl font-semibold bg-red-800 col-span-3 text-white '>{lang[language].search} </button>
        </form>
    </div>
  )
}

export default GptSearchBar