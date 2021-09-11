import React, {useState} from 'react'

function Form() {
    const [value, setValue]= useState(1);
    const handleValue=()=>{
        setValue( value+1);
    }
    const handleValues=()=>{
        setValue( value-1);
    }
    var timestamp =  Date(timestamp);
    

    return (
        <div>
           <div class="flex mt-8 ml-4 ">
  <form method="GET">
    <div class="relative text-gray-600 focus-within:text-gray-400">
      
      <input type="search" name="q" class="py-2 text-sm text-white bg-gray-900  pl-10 focus:outline-none shadow-md focus:bg-white focus:text-gray-900 w-96  " placeholder="Search..." autocomplete="off"/>
      <span class="absolute inset-y-0 left-80 flex items-center pl-2">
        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline justify-items-end">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
    </div>
  </form>

  

  <div className=" shadow-lg">
    <input type="text" className="w-12  items-center  focus:border-gray-900  border-black ml-2 " value={value}/>
      <button className="btn btn-default" onClick={handleValue} type="button"><svg xmlns="http://www.w3.org/2000/svg"
       className="h-3 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
</svg></button>
      <button className="btn btn-default" onClick={handleValues} type="button"><svg xmlns="http://www.w3.org/2000/svg"
       className="h-3 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
</svg></button>
    
    </div>

    <span className="ml-1">{timestamp}</span>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

<div class="relative text-gray-600 focus-within:text-gray-400 h-4 ml-2 items-center">
<button class="bg-blue-500 hover:bg-blue-700 text-white text-sm text-center py-1  px-4  w-28 flex   h-8 ">
<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-6 mt-1 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /> 
</svg>
 Product
</button>
</div>

</div> 
    
        </div>
     
    
    )
}

export default Form
