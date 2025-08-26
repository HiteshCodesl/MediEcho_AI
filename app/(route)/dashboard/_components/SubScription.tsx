import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface Prop  {
    isClicked: boolean,
    setIsClicked: (isClicked: boolean) => void
}
export function SubscriptionEnded({isClicked, setIsClicked}: Prop){

return(
<AlertDialog open={isClicked}>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>SubScription is Ended</AlertDialogTitle>
      <AlertDialogDescription>
        This feature requires an external subscription API. Currently disabled, but fully implemented in code.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel onClick={() => setIsClicked(false)}>Cancel</AlertDialogCancel>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
)
}