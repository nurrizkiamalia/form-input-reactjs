import axios from "axios";
import { useEffect, useState } from "react"

interface User{
    id: number;
    name: string;
    email: string;
    password: string;
}

const UserContext = () =>{

    const [userList, setUserList] = useState<User[]>([])

    const fetchUserList = async () => {
        try{
            const { data } = await axios.get("http://localhost:3000/user");
            setUserList(data)
        } catch(err){
            console.log(err)
        }
    };

    useEffect(() =>{
        fetchUserList()
    }, [])

    return { userList, fetchUserList }
}

export default UserContext