import React from 'react';
import { Link } from 'react-router-dom';

 
 export default function Table() {
     return (
      <div className="flex flex-col">
      <div className="">
      <table className="min-w-full divide-y divide-gray-200">
       <thead className="bg-gray-50">
         <tr>
           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">avatar</th>
           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">id</th>
           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">first name</th>
           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">last name</th>
           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">phone</th>
           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> <span className="sr-only">Edit</span></th>
         </tr>
       </thead>
       <tbody className="bg-white divide-y divide-gray-200">
           <tr>
             <td className="px-6 py-4 whitespace-nowrap" scope="col">
             <div className="flex items-center">
               <div className="flex-shrink-0 h-10 w-10">
                 <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt=""/>
               </div>
             </div>
             </td>
             <td className="px-6 py-4 whitespace-nowrap" scope="col">
               <div className="text-sm text-gray-900">1</div>
             </td>
             <td className="px-6 py-4 whitespace-nowrap" scope="col">
               <div className="text-sm text-gray-900">Test</div>
             </td>
             <td className="px-6 py-4 whitespace-nowrap" scope="col">
               <div className="text-sm text-gray-900">Test</div>
             </td>
             <td className="px-6 py-4 whitespace-nowrap" scope="col">380667896523</td>
             <td className="px-6 py-4 whitespace-nowrap" scope="col">
               {<Link to={`/edit/`} className="text-indigo-600 hover:text-indigo-900">Edit</Link>}
             </td>
           </tr>
           
       </tbody>
     </table>

      </div>
     
     </div>
     )
          
        
 }
 
 function Users() {

  

     
    
}
