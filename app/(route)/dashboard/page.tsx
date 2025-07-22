import { Button } from '@/components/ui/button'
import { Stethoscope } from 'lucide-react'
import React from 'react'
import { HistoryList } from './_components/HistoryList'
import {DoctorsAgentList} from './_components/DoctorsAgentList'
import AddConsultDialog from './_components/AddNewSessionDialog'

function page() {
  return (
    <div>
    <div className='flex flex-col gap-5 md:flex md:flex-row justify-between items-center'>
        <h2 className='font-semibold text-2xl'>My DashBoard</h2>
        <AddConsultDialog />
    </div>
    <HistoryList />
    <DoctorsAgentList />
    </div>
  )
}

export default page
