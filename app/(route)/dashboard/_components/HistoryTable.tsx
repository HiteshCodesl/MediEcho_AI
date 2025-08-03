import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { SessionDetail } from "../medical-agent/[sessionId]/page"
import { Button } from "@/components/ui/button"
import moment from "moment";
import { ViewReport } from "./ViewReport";

export function HistoryTable({historyList} : {historyList: SessionDetail[]}){
      return (
        <div>
           <Table>
  <TableCaption>Previous Consultation Reports.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[200px] lg:w-[300px]">AI Medical Specalist</TableHead>
      <TableHead>description</TableHead>
      <TableHead>date</TableHead>
      <TableHead className="text-right">Action</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {historyList.map((data:SessionDetail,index:number)=>(
    <TableRow key={data.id}>
      <TableCell className="font-medium">{data.selectedDoctor.specialist}</TableCell>
      <TableCell>{data.notes}</TableCell>
      <TableCell>{moment(new Date(data.createdAt)).fromNow()}</TableCell>
      <TableCell className="text-right"><ViewReport data={data}/></TableCell>
    </TableRow>
       ))}
  </TableBody>
</Table>
        </div>
      )
}

