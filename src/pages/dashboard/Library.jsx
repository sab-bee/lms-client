import React from 'react'

const Library = () => {
  const latest = [
    { title: 'Learn python in 7 days', author: 'Joshua', publish: '08/02/1999', edition: '18', borrowed: 20, category: 'coding', desc: "In this book, Douglas Crockford distills the best parts of JavaScript, focusing on its most elegant and effective features. It's a concise guide to writing high-quality JavaScript code, suitable for both beginners and experienced developers looking to deepen their understanding of the language. These books cover a range of program", stock: 8, image: 'https://placehold.co/400' },
    { title: 'Learn python in 7 days', author: 'Joshua', publish: '08/02/1999', edition: '18', borrowed: 20, category: 'coding', desc: "In this book, Douglas Crockford distills the best parts of JavaScript, focusing on its most elegant and effective features. It's a concise guide to writing high-quality JavaScript code, suitable for both beginners and experienced developers looking to deepen their understanding of the language. These books cover a range of program", stock: 8, image: 'https://placehold.co/400' },
    { title: 'Learn python in 7 days', author: 'Joshua', publish: '08/02/1999', edition: '18', borrowed: 20, category: 'coding', desc: "In this book, Douglas Crockford distills the best parts of JavaScript, focusing on its most elegant and effective features. It's a concise guide to writing high-quality JavaScript code, suitable for both beginners and experienced developers looking to deepen their understanding of the language. These books cover a range of program", stock: 8, image: 'https://placehold.co/400' }, { title: 'Learn python in 7 days', author: 'Joshua', publish: '08/02/1999', edition: '18', borrowed: 20, category: 'coding', desc: "In this book, Douglas Crockford distills the best parts of JavaScript, focusing on its most elegant and effective features. It's a concise guide to writing high-quality JavaScript code, suitable for both beginners and experienced developers looking to deepen their understanding of the language. These books cover a range of program", stock: 8, image: 'https://placehold.co/400' }
  ]

  const toppic = [
    { title: 'Learn python in 7 days', author: 'Joshua', publish: '08/02/1999', edition: '18', borrowed: 20, category: 'coding', desc: "In this book, Douglas Crockford distills the best parts of JavaScript, focusing on its most elegant and effective features. It's a concise guide to writing high-quality JavaScript code, suitable for both beginners and experienced developers looking to deepen their understanding of the language. These books cover a range of program", stock: 8, image: 'https://placehold.co/400' },
    { title: 'Learn python in 7 days', author: 'Joshua', publish: '08/02/1999', edition: '18', borrowed: 20, category: 'coding', desc: "In this book, Douglas Crockford distills the best parts of JavaScript, focusing on its most elegant and effective features. It's a concise guide to writing high-quality JavaScript code, suitable for both beginners and experienced developers looking to deepen their understanding of the language. These books cover a range of program", stock: 8, image: 'https://placehold.co/400' },
    { title: 'Learn python in 7 days', author: 'Joshua', publish: '08/02/1999', edition: '18', borrowed: 20, category: 'coding', desc: "In this book, Douglas Crockford distills the best parts of JavaScript, focusing on its most elegant and effective features. It's a concise guide to writing high-quality JavaScript code, suitable for both beginners and experienced developers looking to deepen their understanding of the language. These books cover a range of program", stock: 8, image: 'https://placehold.co/400' }
  ]

  const recommend = [
    { title: 'Learn python in 7 days', author: 'Joshua', publish: '08/02/1999', edition: '18', borrowed: 20, category: 'coding', desc: "In this book, Douglas Crockford distills the best parts of JavaScript, focusing on its most elegant and effective features. It's a concise guide to writing high-quality JavaScript code, suitable for both beginners and experienced developers looking to deepen their understanding of the language. These books cover a range of program", stock: 8, image: 'https://placehold.co/400' },
    { title: 'Learn python in 7 days', author: 'Joshua', publish: '08/02/1999', edition: '18', borrowed: 20, category: 'coding', desc: "In this book, Douglas Crockford distills the best parts of JavaScript, focusing on its most elegant and effective features. It's a concise guide to writing high-quality JavaScript code, suitable for both beginners and experienced developers looking to deepen their understanding of the language. These books cover a range of program", stock: 8, image: 'https://placehold.co/400' },
    { title: 'Learn python in 7 days', author: 'Joshua', publish: '08/02/1999', edition: '18', borrowed: 20, category: 'coding', desc: "In this book, Douglas Crockford distills the best parts of JavaScript, focusing on its most elegant and effective features. It's a concise guide to writing high-quality JavaScript code, suitable for both beginners and experienced developers looking to deepen their understanding of the language. These books cover a range of program", stock: 8, image: 'https://placehold.co/400' }
  ]

  return (
    <div className='w-[70%]'>
      <div>
        <h2 className='font-medium text-2xl'>Latest Arrival</h2>
        <p className=' text-neutral-500 mb-4 border-b pb-2'>List of new books this month</p>

        <div className='gap-4  overflow-x-auto flex pb-2'>
          {
            latest.map((book, i) => <SingleBook book={book} latest={true} key={i}></SingleBook>)
          }
        </div>
      </div>



      <div className='mt-8'>
        <h2 className='font-medium text-2xl'>Top Picks</h2>
        <p className=' text-neutral-500 mb-4 border-b pb-2'>Top books borroed by students</p>
        <div className='flex gap-4'>
          {
            toppic.map((book, i) => <SingleBook book={book} key={i}></SingleBook>)
          }
        </div>
      </div>

      <div className='mt-8'>
        <h2 className='font-medium text-2xl'>For You</h2>
        <p className=' text-neutral-500 mb-4 border-b pb-2'>Recommended for you based on your record</p>
        <div className='flex gap-4'>
          {
            recommend.map((book, i) => <SingleBook book={book} key={i}></SingleBook>)
          }
        </div>
      </div>


    </div>
  )
}

const SingleBook = ({ book, latest }) => {
  const { title, author, publish, edition, borrowed, category, desc, stock, image } = book
  return (
    <div className={`${latest ? 'w-[300px] flex-shrink-0' : 'w-[150px] min-h-[150px]'} `}>
      <img src={image} alt="" className={`rounded-md object-cover`} />
      <h2 className='font-medium mt-2'>{title}</h2>
      <h3>{author}</h3>
    </div>
  )
}

export default Library