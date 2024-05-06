import { Link } from "react-router-dom"


const Header: React.FC = () =>{
    return(
        <>
            <div className="header w-full bg-primary text-white flex justify-start items-center p-5 gap-[10rem] max-lg:flex-col max-lg:gap-3">
                <h2 className="bg-white py-1 px-2 rounded-lg text-black text-[40px] font-bold">Network Call Practice</h2>
                <div className="flex gap-10 justify-self-start">
                    <Link to="/">User</Link>
                    <Link to="/Registration">Registration</Link>
                </div>
            </div>
        </>
    )
}

export default Header