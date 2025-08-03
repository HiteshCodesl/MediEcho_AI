"use client"
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { Doctor } from '../../_components/AddNewSessionDialog';
import { Circle, Loader, PhoneCall, PhoneOff } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Vapi from '@vapi-ai/web';
import { useRouter } from 'next/navigation';

export type SessionDetail = {
  id: string,
  sessionId: string,
  conversation: JSON,
  report: JSON,
  createdAt: string,
  createdBy: string,
  notes: string,
  selectedDoctor: Doctor,
}

type messages = {
  role: string,
  text: string
}
export default function MedicalVoiceAgent() {
  const { sessionId } = useParams();
  const [sessionDetail, setSessionDetail] = useState<SessionDetail>();
  const [callStarted, setCallStarted] = useState(false);
  const vapiInstance = useRef<Vapi | null>(null);
  const [currentRole, setCurrentRole] = useState<string | null>();
  const [liveTranscript, setLiveTranscript] = useState<string>();
  const [messages, setMessages] = useState<messages[]>([]);
  const messageRef = useRef<messages[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    sessionId && GetSessionDetails();
  }, [sessionId])

  const GetSessionDetails = async () => {
    const result = await axios.get(`/api/session-chat?sessionId=${sessionId}`);
    console.log(result.data)
    setSessionDetail(result.data);
  }
  console.log(sessionDetail?.selectedDoctor.image)

  const genrateReport = async () =>{
    if(!messageRef.current.length || !sessionDetail){
      console.warn("missing data", {messages, sessionDetail})
      return;
    }
    const result = await axios.post('/api/medical-report', {
      messages: messageRef.current,
      sessionDetail: sessionDetail,
      sessionId: sessionId
    })
     
    console.log(result.data);
    return result.data;
  }

  const StartCall = () => {
    vapiInstance.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY!);
    
    const VapiAgentConfig = {
      name: 'AI Medical Doctor Voice Agent',
      firstMessage: "Hi there! I'm your AI Medical Assistant. I'm here to help you with any health issues.",
      transcriber: {
        provider: 'assembly-ai',
        language: 'en'
      },
      voice: {
        provider: 'playht',
        voiceId: sessionDetail?.selectedDoctor.voiceId
      },
      model: {
        provider: 'openai',
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: sessionDetail?.selectedDoctor?.agentPrompt
          }
        ]
      }
    }
    //@ts-ignore
    vapiInstance.current.start(VapiAgentConfig);

    vapiInstance.current.on('call-start', () => {
      setCallStarted(true);
      console.log('Call started')
    });
    vapiInstance.current.on('call-end', async() => {
      console.log('Call ended')
      setCallStarted(false);

      setTimeout(async()=>{
        await genrateReport();
        setLoading(false);
      }, 1000);
    });

    vapiInstance.current.on('message', (message) => {
      if (message.type === 'transcript') {

        const { role, transcriptType, transcript } = message;

        console.log(`${message.role}: ${message.transcript}`);

        if (transcriptType == "partial") {
          setLiveTranscript(transcript);
          setCurrentRole(role);

        } else if(transcriptType == 'final') {
          setMessages((prev: any) => {
            const updated = [...prev, { role: role, text: transcript }]
            messageRef.current = updated;
            return updated;
          });
          setLiveTranscript('');
          setCurrentRole(null);
        }
      }
    });

    vapiInstance.current.on('speech-start', () => {
      console.log('Assistant started speaking');
      setCurrentRole('assistant');
    });

    vapiInstance.current.on('speech-end', () => {
      console.log('Assistant stopped speaking');
      setCurrentRole('user');
    });
  }

  const endCall = async() => {
    setLoading(true);
    if (!vapiInstance.current) return;

    vapiInstance.current.stop();
    console.log("messages", messages)
    setCallStarted(false);
    vapiInstance.current=null;

    setLoading(false);
    router.replace('/dashboard')
  };

  return (
    <div className='p-10 border rounded-2xl bg-secondary'>
      <div className='sm:flex sm:flex-col md:flex-row justify-between'>
        <h2 
        className='flex items-center gap-2'>
        <Circle className={`h-4 w-4  rounded-full ${callStarted ? 'bg-green-500' : 'bg-red-500'}`} />
        {callStarted ? 'Connected' : 'Not Connected'}</h2>
        <h2 className='text-gray-500'>00:00</h2>
      </div>

      {sessionDetail && 
      <div className='flex flex-col items-center mt-10'>
        <Image className='rounded-full h-[100px] object-cover' 
        src={sessionDetail?.selectedDoctor?.image} 
        alt={sessionDetail?.selectedDoctor?.specialist} 
        width={100} 
        height={80} 
        />

        <h2 className='mt-2 text-lg'>{sessionDetail.selectedDoctor?.specialist}</h2>
        <p className='text-sm text-gray-500'>AI Medical Voice Agent</p>

        <div className='mt-20 mb-10 overflow-y-auto flex flex-col items-start px-10 md:px-28 lg:px-52 xl:px-72'>
          {messages?.slice(-4).map((msg, index) => (
            <h2 className='mb-3' key={index}>{msg.role}:{msg.text}</h2>
          ))}

          {liveTranscript && 
          liveTranscript?.length > 0 && 
          <h2 className='text-lg'>{currentRole}: 
          {liveTranscript}</h2>}
        </div>

        {!callStarted ? (
        <Button variant={"primary"} onClick={StartCall} disabled=
        {loading}>
        {loading ? <Loader className='animate-spin' />:  <PhoneCall /> }
        Start Call
        </Button> ) : (
          <Button onClick={endCall} variant={"destructive"} disabled={loading}> 
          {loading ? <Loader className='animate-spin' /> : <PhoneOff />
           }
          Disconnect
          </Button>
        )}
      </div>}

    </div>
  )
}

