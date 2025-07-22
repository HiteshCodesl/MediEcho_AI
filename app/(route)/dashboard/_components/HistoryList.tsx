"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import AddConsultDialog from './AddNewSessionDialog';

export function HistoryList() {
    const [historyList, setHistoryList] = useState([]);
  return (
    <div className='mt-7'>
       {historyList.length == 0 ?
        <div className='flex flex-col items-center justify-between p-8 border border-dashed border-primary'>
           <Image src={"/medical-assistant.png"} alt="image" width={150} height={150}
           />
           <h2 className='text-nowrap text-lg md:text-xl font-bold'>No Recent Consultation</h2>
           <p>It looks like you haven't consulted with doctors yet.</p>
           <AddConsultDialog />
        </div>  
        : <div>List</div>
       } 
    </div>
      )
}

