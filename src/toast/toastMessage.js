import { toast } from "react-hot-toast"

export const toastMessage = (data)=>{
    
    data.status ? toast.success(data.message) : toast.error(data.message)
}