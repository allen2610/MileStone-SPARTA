import React from 'react'
import { useFormStatus } from 'react-dom'

function MoodButton() {
    const { pending } = useFormStatus();
  return (
    <button type="submit" className="bg-green-400 py-2 mx-auto flex justify-center rounded-full px-5 font-semibold italic text-white ">
        {pending ? 'Submitting...' : 'Submit'}
    </button>
  )
}

export default MoodButton