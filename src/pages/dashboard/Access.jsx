import React from 'react'

const Access = () => {

  const data = [{
    name: 'introduction to python programming', issue: '02-15-24', due: '02-28-24', daysleft: 3,
  }, {
    name: 'Python Crash Course by Eric Matthesg', issue: '02-15-24', due: '02-28-24', daysleft: 2,
  }]

  return (
    <div className='overflow-auto'>
      <div className="border rounded-xl w-[1000px]">
        <table className="text-left w-full text-sm ">
          <thead>
            <tr className='grid grid-cols-7 border-b gap-x-4'>
              <th className='pl-5 font-medium col-span-2'>Name</th>
              <th className='font-medium'>Issue</th>
              <th className='font-medium'>Due Date</th>
              <th className='font-medium'>Days Left</th>
              <th className='font-medium col-span-2'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((value, i) => <TableRow value={value} key={i}></TableRow>)
            }
          </tbody>
          <tfoot>
            <tr className='grid grid-cols-7 gap-x-4'>
              <th className='pl-5 font-normal text-neutral-400 col-span-2'>Name</th>
              <th className='font-normal text-neutral-400'>Issue</th>
              <th className='font-normal text-neutral-400'>Due Date</th>
              <th className='font-normal text-neutral-400'>Days Left</th>
              <th className='font-normal text-neutral-400 col-span-2'>Action</th>
            </tr>
          </tfoot>

        </table>
      </div>
    </div>
  )
}



const TableRow = ({ value }) => {
  const { issue, due, daysleft, name } = value;
  return <tr className='grid grid-cols-7 border-b py-2 gap-x-4 items-center'>
    <td className='pl-5 col-span-2'>{name}</td>
    <td className='' >{issue}</td>
    <td className='' >{due}</td>
    <td className='' >{daysleft}</td>
    <td className='pr-5 space-x-3 col-span-2'>
      <button className='h-8 bg-black text-white rounded-md px-5'>Return</button>
      <button className='h-8 border  rounded-md px-5'>Extend</button>
    </td>
  </tr>
}

export default Access