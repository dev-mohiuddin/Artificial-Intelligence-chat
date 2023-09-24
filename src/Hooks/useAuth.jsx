

import jwt_decode from 'jwt-decode'

function useAuth() {

    const token = window.localStorage.getItem("userInfo") || null ;

    if(token){
        const user = jwt_decode(token)
        if(user.user === true){
            return ({
                status : true,
                id : user.user_id,
                role : user.role,
                name : user.name,
                email : user.email,
                username : user.username,
            })
        }else{
            localStorage.clear("userInfo")
            return({status: false});
        }
    }else{
        return({status: false});
    }

}

export default useAuth