import { useDispatch } from "react-redux"
import { authAction } from "../store/auth"

const Logout = () => {

    const dispatch = useDispatch()

    function handleSignOut() {
        dispatch(authAction.logout())
    }

    return (
        <div className=" w-[350px] h-[350px] rounded-[50px] flex flex-col justify-center items-center backdrop-blur-[20px] ">
            <h1 className=" text-[white] font-semibold text-[30px] ">Welcome to my site</h1>
            <button onClick={handleSignOut} className=" btn btn-danger w-[120px]
            mt-[20px] font-bold text-[20px] ">Logout</button>
        </div>
    )
}

export default Logout