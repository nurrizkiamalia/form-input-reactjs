import Header from "../../component/Header"
import UserContext from "../../context/UserContext"

const UserList: React.FC = () =>{

    const { userList } = UserContext()
    
    if(!userList) return <div>No data</div>

    return(
        <div >
            <Header />
            <div className="flex justify-center items-center min-h-[70vh] w-full">
                <div className="w-[70%] max-lg:w-[80%] ">
                    <table className="w-[100%]">
                        <thead className="text-left">
                            <tr>
                                <th className="w-[30%] ">Name</th>
                                <th>Email</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                        {userList.map((user) => (
                            <tr key={user.name}>
                                <td className="py-2">{user.name}</td>
                                <td className="py-2">{user.email}</td>
                                <td className="py-2">{user.password}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div> 
            </div>
        </div>
    )
}

export default UserList