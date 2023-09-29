

import jwt_decode from 'jwt-decode'


function useAdminAuth() {

    const token = window.localStorage.getItem("userInfo") || null ;

    if(token){
        const user = jwt_decode(token)
        
        if(user.user === true){ 
            if(user.role === "admin"){
                return({
                    status : true,
                    id : user.user_id,
                    role : user.role,
                    name : user.name,
                    email : user.email,
                    username : user.username,
                })
            }else{
                return({status : false})
            }
        }else{
            return({status : false})
        }

    }else{
        return({status : false})
    }
}

export default useAdminAuth