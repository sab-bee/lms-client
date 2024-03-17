import React from 'react'

const Book = ({ book }) => {
  const { title, author, image, description, edition, genre, stock } = book;
  console.log(book)
  return (
    <div >
      <h2 className='text-3xl font-medium'>{title}</h2>
      <p className='mt-5'>author - {author}</p>
      <p className='mb-5'>edition - {edition}</p>
      <span className='border px-2 py-1 rounded'>{genre}</span>
      <div className='flex gap-10 mt-12'>
        <img src={image} alt="" className='w-[193px] h-[235px] object-cover rounded-md' />
        <div className='justify-self-start space-y-5'>
          <h2 className='font-medium'>Description</h2>
          <p className='w-[642px]'>{description}</p>
          <p>stock - {stock}</p>
          <button className='bg-black text-white px-8 py-1 rounded'>borrow</button>
        </div>
      </div>


    </div>
  )
}

export default Book