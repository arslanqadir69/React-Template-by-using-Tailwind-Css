import React from 'react'

function Product() {
    return (
        <div className="flex flex-row justify-around mt-5 items-center">
            <div>
                <h3>Products Items</h3>
            </div>
            <div className="flex items-center justify-center">
                <select>
                    <option>
                        Application Name
                    </option>
                </select>
                <button class="bg-white  hover:bg-blue-700  py-2 px-4 rounded">
View Log
</button>
<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
</svg>
            </div>
        </div>
    )
}

export default Product
