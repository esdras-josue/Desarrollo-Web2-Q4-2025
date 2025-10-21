import React from 'react'
import { Person } from '../models/Person';

export default function PresentationCard(props: Person) {
  return (
    <div className="border rounded-lg shadow-md p-4 w-64 bg-white hover:shadow-xl transition-shadow">
      <p className='font-bold'>ID: {props.id}</p>
      <p className='text-lg font-semibold'>Name: {props.fullName}</p>
      <p className='text-sm text-gray-600'>Ocupation: {props.Occupation}</p>
      <p className='text-sm text-gray-600'>Country: {props.Country}</p>
    </div>
  )
}
