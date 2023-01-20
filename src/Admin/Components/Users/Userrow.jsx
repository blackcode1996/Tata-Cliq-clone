import React from 'react'

export const Userrow = ({id,name,email,profile,password}) => {
  return (
    <tr>
        <td class="pl-4 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="flex items-center">
                <div class="flex-shrink-0 w-10 h-10">
                    <img class="w-10 h-10 rounded-full" src={profile}
                        alt="admin dashboard ui"/>
                </div>

                <div class="ml-4">
                    <div class="text-sm font-medium leading-5 text-gray-900">
                        {name}
                    </div>
                </div>
            </div>
        </td>

        <td class=" py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="text-sm leading-5 text-white">{email}</div>
        </td>

        

        <td
            class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-400" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        </td>
        <td
            class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-400" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
        </td>
    </tr>
  )
}
