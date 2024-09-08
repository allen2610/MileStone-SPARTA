import React from 'react'
import { useFormStatus } from 'react-dom'

function MoodButton() {
    const { pending } = useFormStatus();
  return (
    <button className="bg-blue-100 py-2 mx-auto w-full" disabled = {pending} >
        {pending ? 'Submitting...' : 'Submit'}
    </button>
  )
}

export default MoodButton