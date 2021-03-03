import React from 'react'
import UserForm from '../../components/User-Form';
import { useParams } from 'react-router-dom';
import { request, gql } from "graphql-request";
import {useQuery} from 'react-query';


const EditUserScreen = () => {
  const { id } = useParams()
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


const { isLoading, error, data} = query


  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  console.log(data)
  const user = data.find(user => user.id ===id)


    return <UserForm user={user}/>
          
      
}

export default EditUserScreen
