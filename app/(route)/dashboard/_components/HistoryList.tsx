"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import AddConsultDialog from './AddNewSessionDialog';
import axios from 'axios';
import { HistoryTable } from './HistoryTable';
import { SessionDetail } from '../medical-agent/[sessionId]/page';

export function HistoryList() {
    const [historyList, setHistoryList] = useState<SessionDetail[]>([]);

    useEffect(()=>{
       getHistoryList();
    },[])

    const getHistoryList = async() =>{
      const result = await axios.get('/api/session-chat?sessionId=all');
      console.log(result.data);
      setHistoryList(result.data);
    }

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
        : <div>
           <HistoryTable  historyList={historyList}/>
        </div>
       } 
    </div>
      )
}

