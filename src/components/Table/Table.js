import React from 'react';
import { Link } from 'react-router-dom';
import { request, gql } from "graphql-request";
import {
  useQuery,
  useQueryClient,
} from 'react-query';
 
 export default function Table() {

  const queryClient = useQueryClient()
  const endpoint = 'https://test-task.expane.pro/api/graphql';

    const query = useQuery("getClients", async () => {
        const {getClients}= await request(
        endpoint,
        gql `query MyQuery {
          getClients {
            avatarUrl
            firstName
            id
            lastName
            phone
          }
        } `
      );
      return getClients;
    });

    const { isLoading, error, data, isFetching } =query

    if (isLoading) return "Loading...";
    if (error) return "An error has occurred: " + error.message;

    return(
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
          {query.data.map(user => {
          return (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap" scope="col">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img className="h-10 w-10 rounded-full" src={user.avatarUrl} alt=""/>
                </div>
              </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap" scope="col">
                <div className="text-sm text-gray-900">{user.id}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap" scope="col">
                <div className="text-sm text-gray-900">{user.firstName}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap" scope="col">
                <div className="text-sm text-gray-900">{user.lastName}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap" scope="col">{user.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap" scope="col">
                {<Link to={`/edit/${user.id}`} className="text-indigo-600 hover:text-indigo-900">Edit</Link>}
              </td>
            </tr>
            )}
            )}
        </tbody>
       </table>
       </div>
      </div>
        )
 }
 


  

     
