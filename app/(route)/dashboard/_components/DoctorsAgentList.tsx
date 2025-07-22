import { Button } from '@/components/ui/button'
import { AIDoctorAgents } from '@/shared/list'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export function DoctorsAgentList() {
    return (
        <div className='mt-10'>
            <h2 className='font-bold text-xl text-foreground'>AI Specialist Doctors Agent</h2>

            <div className='mt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>

            {AIDoctorAgents.map((agent) => (
                <div key={agent.id} className='border-2 p-3 hover:cursor-pointer'>

                        <Image 
                        className='w-full h-[250px] rounded-xl object-cover' 
                        alt='agent' 
                        src={agent.image} 
                        width={150} 
                        height={150} />

                        <h2 
                        className='font-semibold text-lg'>
                        {agent.specialist}
                        </h2>
                        <p className='text-gray-500'>{agent.description}</p>

                        <Button 
                        variant={"primary"} 
                        className='w-full mt-3 px-2 hover:scale-105'>
                        Start a Consultation 
                        <ArrowRight />
                        </Button>

                    </div>
                ))}
            </div>
        </div>
    )
}

