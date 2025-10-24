import React from 'react'
import { Person } from '../models/Person';

export default function PresentationCard(prop: Person) {
  return (
    
    <div className="border rounded-lg shadow-md p-4 w-64 bg-white hover:shadow-xl transition-shadow">
      <p className='text-lg font-semibold'>Name: {prop.fullName}</p>
      <p className='text-sm text-gray-600'>age: {prop.age}</p>
      <p className='text-sm text-gray-600'>Country: {prop.country}</p>
    </div>
    
  )
}
