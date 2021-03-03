import React, {useReducer} from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from "yup";

import { GraphQLClient, gql } from 'graphql-request'


const Schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  phone: yup.string().required(),
  avatarUrl:yup.string().required()
}); 

const reducer = (state,{field, value}) => {
  return {
    ...state,
    [field]:value
  }
}
const UserForm = (props) => {
  
  const initialState = {
    firstName:props.user.firstName || '',
    lastName:props.user.lastName || '',
    phone:props.user.phone || '',
    avatarUrl:props.user.avatarUrl || ""
  }

  const[state, dispatch] = useReducer(reducer,initialState)
  const onChange = (e) => {
    dispatch({field:e.target.name, value:e.target.value})
  };

  const {firstName, lastName, phone, avatarUrl} = state

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(Schema)
  });
 

  const onSubmit = async(data) => {
    console.log(data.phone)
    const endpoint = 'https://test-task.expane.pro/api/graphql';
    const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
    },
    })
    const mutation = gql`
    mutation MyMutation($firstName:String!,$lastName:String!,$phone:String, $avatarUrl:String) {
      addClient(firstName:$firstName, lastName:$lastName, phone:$phone, avatarUrl:$avatarUrl) {
        firstName
        id
        lastName
        phone
        avatarUrl
      }
    }
    `;
    const variables = {
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      avatarUrl: data.avatarUrl
    }
    
const res = await graphQLClient.request(mutation,variables)
console.log(JSON.stringify(res, undefined, 2))
  };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="max-w-xl mx-auto py-12 divide-y md:max-w-4xl">
          <h2 className="text-2xl font-bold">Please fill this form</h2>
            <div className="mt-8 max-w-md">
              <div className="grid grid-cols-1 gap-6">
                <label className="block text-sm font-medium">
                  <span className="text-gray-700">firstName</span>
                   <input onChange={onChange }
                      value={firstName}
                      name="firstName" type="text" 
                      className="mt-1 block w-full bg-blue-50"
                      placeholder=''
                      ref={register}/>
                      {errors.firstName && <p className="font-serif text-red-600">{errors.firstName.message}</p>}
                      
                </label>
                <label className="block">
                  <span className="text-gray-700">lastName</span>
                   <input onChange={onChange }
                      value={lastName}
                      name="lastName" type="text" 
                      className="mt-1 block w-full bg-blue-50"
                      placeholder=''
                      ref={register}/>
                      {errors.lastName && <p className="font-serif text-red-600">{errors.lastName.message}</p>}
                        
                </label>
                <label className="block">
                  <span className="text-gray-700">phone</span>
                   <input onChange={onChange }
                      value={phone}
                      name="phone" type="text" 
                      className="mt-1 block w-full bg-blue-50"
                      placeholder=''
                      ref={register}/>
                      {errors.phone && <p className="font-serif text-red-600">{errors.phone.message}</p>}
                </label>
                <label className="block">
                  <span className="text-gray-700">Avatar</span>
                   <input onChange={onChange }
                      value={avatarUrl}
                      name="avatarUrl" type="text" 
                      className="mt-1 block w-full bg-blue-50"
                      placeholder=''
                      ref={register}/>
                      {errors.avatarUrl && <p className="font-serif text-red-600">{errors.avatarUrl.message}</p>}
                      
                </label>
                
              </div>
            </div>
        </div>

        <input type="submit"  />
            </form>
          );
}

export default UserForm
