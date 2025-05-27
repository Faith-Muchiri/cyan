import React from 'react'

const page = ({ params }: {params: {id: string}}) => {
    const { id } = params;

  return (
    <div>
      user profile: {id}
    </div>
  )
}

export default page
