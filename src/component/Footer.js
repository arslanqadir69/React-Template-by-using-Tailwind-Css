import React from 'react'

function Footer() {
    return (
        <div className="mt-36 mx-44  shadow-lg border-gray-900 justify-center items-center">
<table class="table-fixed shadow-lg">
  <thead className="text-center font-bold">
    <tr>
     <td className="w-1/3   ">Gross Total</td>
     <td className="w-1/5">Total Discount</td>
     <td className="w-1/6"> Total</td>
     
    </tr>
  </thead>
  <tbody className="items-center text-center font-bold">
    <tr>
     <td>00.00</td>
     <td>0%</td>
     <td>00.00</td>
     <td className="flex-row"> <button class="  bg-blue-700 text-white h-8   px-4 rounded">
View Log
</button>
<button class="bg-blue-700   px-4 rounded h-8 text-white">
View Log
</button></td>
    </tr>
  </tbody>
</table>
        </div>
    )
}

export default Footer
