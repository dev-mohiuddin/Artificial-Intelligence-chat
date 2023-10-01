

import jwt_decode from 'jwt-decode'
import { toastMessage } from '../toast/toastMessage';

 function useAuth() {

    try {
        const token = window.localStorage.getItem("userInfo") || null;
        if (token) {
            const user = jwt_decode(token)
            return ({
                status: true,
                id: user.user_id,
                role: user.role,
                name: user.name,
                email: user.email,
                username: user.username,
            })

        } else {
            return ({ status: false });
        }
    } catch (error) {
        localStorage.clear("userInfo")
        toastMessage({
            status: false,
            message: "Unauthorized User",
        })
    }

}

export default useAuth