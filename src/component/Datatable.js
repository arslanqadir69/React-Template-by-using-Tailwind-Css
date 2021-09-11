import React from 'react'

function Datatable() {
    return (
        <div  className="max-w-7xl mt-32 mx-auto px-2 sm:px-6 lg:px-8">
            
            <div className="relative flex items-center justify-between h-16">

        
           
        <div className="container mx-auto">
            <div className="flex flex-col">
                <div className="w-full">
                    <div className="p-4 border-b border-gray-200 shadow">
                       
                        <table id="dataTable" className="p-4">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th><input type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" /> </th>
                                    <th className="p-8 text-xs text-gray-500">
                                        S.N.
                                    </th>
                                    <th className="p-8 w-64 text-xs text-gray-500">
                                        Items description
                                    </th>
                                    <th className="p-8 w-8 text-xs text-gray-500">
                                        Price
                                    </th>
                                    <th className="p-8 w-8 text-xs text-gray-500">
                                        Qlty
                                    </th>
                                    <th className="px-6 w-8 py-2 text-xs text-gray-500">
                                        Gross Amt.
                                    </th>
                                    <th className="px-6 w-8 py-2 text-xs text-gray-500">
                                       Discount
                                    </th>
                                    <th className="px-6 w-8 py-2 text-xs text-gray-500">
                                        Net Amt.
                                    </th>
                                    
                                    <th className="px-6 w-64 py-2 text-xs item-center  text-gray-500">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                               
                                <tr className="whitespace-nowrap">
                                <td><input type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" /> </td>
                                    <td className="px-6 py-4 text-sm text-center text-gray-500">
                                        3
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="text-sm text-gray-900">
                                            Jon doe 3
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="text-sm text-gray-500">text</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-center text-gray-500">
                                        5
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <a href="#" className="px-4 py-1 text-sm    ">5</a>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                     
                                        <a href="#" className="px-4 py-1 text-sm   ">5</a>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                    
                                        <a href="#" className="px-4 py-1 text-sm      ">1000</a>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                    <a href="#" className="px-4 py-1 text-sm      ">Edit</a>
                                        <a href="#" className="px-4 py-1 text-sm      ">Delete</a>
                                        <a href="#" className="px-4 py-1 text-sm      ">Delete</a>
                                    </td>
                                </tr>

                                <tr className="whitespace-nowrap">
                                <td><input type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" /> </td>
                                    <td className="px-6 py-4 text-sm text-center text-gray-500">
                                        3
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="text-sm text-gray-900">
                                            Jon doe 3
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="text-sm text-gray-500">text</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-center text-gray-500">
                                        5
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <a href="#" className="px-4 py-1 text-sm    ">5</a>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                     
                                        <a href="#" className="px-4 py-1 text-sm     rounded">5</a>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                    
                                        <a href="#" className="px-4 py-1 text-sm    rounded">1000</a>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                    <a href="#" className="px-4 py-1 text-sm     rounded">Edit</a>
                                        <a href="#" className="px-4 py-1 text-sm     rounded">Delete</a>
                                        <a href="#" className="px-4 py-1 text-sm     rounded">Delete</a>
                                    </td>
                                </tr>

                                {/* <tr className="whitespace-nowrap">
                                <td><input type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" /> </td>
                                    <td className="px-6 py-4 text-sm text-center text-gray-500">
                                        3
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="text-sm text-gray-900">
                                            Jon doe 3
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="text-sm text-gray-500">text</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-center text-gray-500">
                                        5
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <a href="#" className="px-4 py-1 text-sm     rounded">5</a>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                     
                                        <a href="#" className="px-4 py-1 text-sm     rounded">5</a>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                    
                                        <a href="#" className="px-4 py-1 text-sm     rounded">1000</a>
                                    </td>
                                    <td className="px-6 py-4 item-center text-center">
                                    <a href="#" className="px-4 py-1 text-sm     rounded">Edit</a>
                                        <a href="#" className="px-4 py-1 text-sm    rounded">Delete</a>
                                        <a href="#" className="px-4 py-1 text-sm     rounded">Delete</a>
                                    </td>
                                </tr> */}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Datatable
