import { PricingTable } from "@clerk/nextjs";

export default function Billing(){
      return(
        <div className="px-10 md:px-24 lg:px-48 xl:px-64 mb-10">
           <h2 className="font-bold text-3xl flex justify-center"> Join Subscription table</h2>  
           <PricingTable />
        </div>
      )
}