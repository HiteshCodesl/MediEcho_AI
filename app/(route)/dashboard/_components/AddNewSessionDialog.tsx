"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { DialogClose } from '@radix-ui/react-dialog'
import { ArrowRight, Loader2 } from 'lucide-react'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export type Doctor = {
        id: number,
        specialist: string,
        description: string,
        image: string,
        agentPrompt: string,
        voiceId: string,
        subscriptionRequired: boolean
}

function AddConsultDialog() {
    const [note, setNote] = useState<string>();
    const [loading, setLoading] = useState(false);
    const [suggestedDoctor, setSuggestedDoctor] = useState<Doctor[]>();
    const [selectedDoctor, setSelectedDoctor] = useState<Doctor>()
    const router = useRouter();

    const GetDoctorPerNote = async()=>{
        setLoading(true);
        const response = await axios.post("/api/suggest-doctors",{ 
         notes: note
        });
        const data = response.data;
        console.log("data", data)
        setSuggestedDoctor(data)
        setLoading(false);
    }
    console.log("suggestedDoctor",suggestedDoctor)

    const onStartConsultation = async() =>{
         setLoading(true);
        const result = await axios.post("/api/session-chat", {
            notes: note,
            selectedDoctor: selectedDoctor
        })
        console.log(result.data)
        if(result.data.sessionId){
            console.log(result.data.sessionId)
            router.push(`/dashboard/medical-agent/${result.data.sessionId}`)
        }
        setLoading(false);
    }

    return (
        <div>
    <Dialog>
            <DialogTrigger asChild>
             <Button  className="mt-3 hover:scale-105 hover:cursor-pointer" variant={'primary'}>             
               Start a Consultation
            </Button>
            </DialogTrigger>                
            <DialogContent>
                <DialogHeader>
                 
                    <div className='overflow-y-auto'>
                    <DialogTitle className='text-violet-500 mb-2'>Add Basic details</DialogTitle>
                    <DialogDescription asChild>
                      {!suggestedDoctor ? 
                      <div className='p-8'>
                        <h2 className='mt-3 mb-2'>Add Symptoms or any Other Details</h2>
                         <Textarea 
                         onChange={((e)=>setNote(e.target.value))}
                         className='sm:w-[50px] md:w-[400px]' placeholder='Add more Details here'/>
                      </div>
                    : 
                    <div className='grid grid-col-1 md:grid-cols-2 gap-3'>    
                        {suggestedDoctor.map((doctor)=>(

                            <div 
                            key={doctor.id} 
                            className={`border p-4 w-50 hover:cursor-pointer rounded-xl mb-2 ml-4 hover:border-violet-900 ${selectedDoctor?.id == doctor.id && "border-violet-900"}`} 
                            onClick={()=>setSelectedDoctor(doctor)}
                            >
                            <Image 
                            src={doctor.image} 
                            alt='image' 
                            className='h-[70px] object-cover rounded-4xl ml-10 shadow-2xl'
                            width={70} 
                            height={200}
                            />

                            <h2 
                            className='text-lg font-semibold mt-2'>{doctor.specialist}
                            </h2>
                            <p 
                            className='text-gray-500'>
                            {doctor.description}
                            </p>
                            <Button 
                            className='mt-2 w-full hover:cursor-pointer hover:scale-105' variant={'primary'}>
                            Start consult
                            </Button>

                            </div>
                        ))}
                      </div> }
                    </DialogDescription>
                    </div>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                    <Button className='hover:cursor-pointer' variant={'outline'}>Cancel</Button>
                    </DialogClose>

                  {!suggestedDoctor ? 
                    <Button 
                    onClick={() =>GetDoctorPerNote()}
                    disabled={!note} 
                    className=' hover:scale-105' 
                    variant={"primary"}>
                   
                    Next 
                    {loading ? <Loader2 className='animate-spin'/>: <ArrowRight />}
                    </Button>
                    : 
                    <Button
                    disabled={loading || !selectedDoctor}
                    onClick={() => onStartConsultation()}
                    className='hover:scale-105 hover:cursor-pointer'
                    variant={"primary"}>
                    Start Consult
                     {loading ? <Loader2 className='animate-spin'/>: <ArrowRight />}
                    </Button>
                    }

                </DialogFooter>
            </DialogContent>
    </Dialog>
        </div>
    )
}

export default AddConsultDialog
