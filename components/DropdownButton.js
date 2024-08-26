"use client"
import { useState } from 'react';
import { useRouter} from 'next/navigation'


const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter()
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const months = [1,2,3,4,5,6,7,8,9,10,11,12]
  const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        Dropdown
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {months.map((entry) => (          
            <li key={entry.id} className="dropdown-item">
                <button
                className='bg-blue-500 text-white p-1'
                onClick={() => {
                    router.push(`/mood-Assessment?month=${entry}&year=${2024}`)
                }}>
                {monthNames[entry-1]} 2024
                </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;