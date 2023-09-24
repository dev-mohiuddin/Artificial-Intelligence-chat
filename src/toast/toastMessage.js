import { toast } from "react-hot-toast"

export const toastMessage = (data)=>{
    
    data.status ? toast.success(data.message ? data.message : "success") : toast.error(data.message)
}