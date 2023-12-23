import * as api from '../api'
import Swal from 'sweetalert2'
export const getResponse=(formData)=>async(dispatch)=>{
    try{
        const {data}=await api.getResponse(formData);
        Swal.fire({
            icon: "success",
            title: `Message you sent: ${data.message}`,
            showConfirmButton: false,
            timer: 1500
          });
    }catch(err){
        console.log(err);
    }
}