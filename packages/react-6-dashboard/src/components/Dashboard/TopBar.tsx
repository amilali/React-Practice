import {FiCalendar} from 'react-icons/fi'
export const TopBar = () => {
  return (
    <div className="border-b border-stone-400 font-bold pb-2 px-4 pt-2">
      <div className="flex items-center justify-between text-gray-700 leading-0 p-0.5">
        <div>
        <span className="text-sm/3 block">
          🚀 Good morning!
        </span>
        <span className="text-xs font-medium block">
          Monday, Aug 14th 2000
        </span>
        </div>
        <button className='cursor-pointer text-xs flex items-center justify-between gap-1 text-green-800 bg-green-100 border border-green-700 rounded p-1 transition-colors hover:bg-green-600 hover:text-white'>
            <FiCalendar />
            <span>Prev six months</span>
        </button>
      </div>
    </div>
  )
}