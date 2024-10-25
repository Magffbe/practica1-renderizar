import React from 'react'

interface CardProps {
    header: string
    body: string
}

export default function Card({header, body}: CardProps) {
  return (
    <div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"></div>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{header}</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{body}</p>
      <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Read more
    </div>
    </div>
  )
}
