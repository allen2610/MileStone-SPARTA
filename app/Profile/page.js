import { getSession } from '@/actions/actions'
import { redirect } from 'next/navigation';
import React from 'react'

const page = async () => {
    const session = await getSession();
    if (!session){
        redirect("/");
    }
    const user = session.user;
    const dob = new Date(user.dateOfBirth);
    const formattedDate = dob.toLocaleDateString('en-GB')
    return (
    <div>
      Nama: {user.name}! <br />
      Email: {user.email} <br />
      Gender: {user.gender ? 'Laki-laki' : 'Perempuan'} <br />
      Date Of Birth: {formattedDate}  <br />
      Bio: {user.bio} <br />
    </div>
  )
}

export default page
