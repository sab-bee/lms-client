import React from 'react'

const Browser = () => {
  const books = [
    { title: 'Learn python in 7 days', author: 'Joshua', publish: '08/02/1999', edition: '18', borrowed: 20, category: 'coding', desc: "In this book, Douglas Crockford distills the best parts of JavaScript, focusing on its most elegant and effective features. It's a concise guide to writing high-quality JavaScript code, suitable for both beginners and experienced developers looking to deepen their understanding of the language. These books cover a range of program", stock: 8, image: 'https://placehold.co/400' },
    { title: 'Learn python in 7 days', author: 'Joshua', publish: '08/02/1999', edition: '18', borrowed: 20, category: 'coding', desc: "In this book, Douglas Crockford distills the best parts of JavaScript, focusing on its most elegant and effective features. It's a concise guide to writing high-quality JavaScript code, suitable for both beginners and experienced developers looking to deepen their understanding of the language. These books cover a range of program", stock: 8, image: 'https://placehold.co/400' },
    { title: 'Learn python in 7 days', author: 'Joshua', publish: '08/02/1999', edition: '18', borrowed: 20, category: 'coding', desc: "In this book, Douglas Crockford distills the best parts of JavaScript, focusing on its most elegant and effective features. It's a concise guide to writing high-quality JavaScript code, suitable for both beginners and experienced developers looking to deepen their understanding of the language. These books cover a range of program", stock: 8, image: 'https://placehold.co/400' }, { title: 'Learn python in 7 days', author: 'Joshua', publish: '08/02/1999', edition: '18', borrowed: 20, category: 'coding', desc: "In this book, Douglas Crockford distills the best parts of JavaScript, focusing on its most elegant and effective features. It's a concise guide to writing high-quality JavaScript code, suitable for both beginners and experienced developers looking to deepen their understanding of the language. These books cover a range of program", stock: 8, image: 'https://placehold.co/400' }
  ]

  return (
    <div className='w-[70%]'>
      <div className='flex gap-4 mt-10'>
        <input type="text" placeholder='write title or the author' className='h-9 border px-4 rounded-md outline-none focus:bg-neutral-50 w-1/2 shadow shadow-[rgba(0,0,0,0.04)] placeholder:-translate-y-[2px]' />
        <button className='block bg-black text-white h-9 px-6 rounded-md'>search</button>
      </div>

      <div className='grid grid-cols-4 mt-10 gap-8'>
        {
          books.map((book, key) => <SingleBook book={book} key={key}></SingleBook>)
        }
      </div>
    </div>
  )
}

const SingleBook = ({ book }) => {
  const { title, author, image } = book
  return (<div>
    <img src={image} alt="" className='rounded-md' />
    <h2 className='font-medium mt-2'>{title}</h2>
    <p className='text-neutral-500'>{author}</p>
  </div>)
}
export default Browser