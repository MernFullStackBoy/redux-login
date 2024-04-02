import { useDispatch } from "react-redux"
import { authAction } from "../store/auth"

const SignUp = () => {

    const dispatch = useDispatch()

    function handleSignup(e) {
        e.preventDefault()
        dispatch(authAction.login())
    }

    return (
        <form onSubmit={handleSignup} className=" flex flex-col items-center w-[350px] h-[500px] p-[20px] rounded-[20px] backdrop-blur-[20px] ">
            <h1 className=" text-[40px] font-semibold text-[white] ">Sign Up</h1>
            <label className=" mt-[30px] ">
                <span className=" text-[18px] font-bold text-[white] ">Username</span>
                <input type="text" placeholder="Enter your name" required className=" mt-[10px] w-[100%] h-[40px] rounded-[10px] pl-[20px] text-[white] text-[15px] outline-none bg-transparent shadow border placeholder:text-[white] " />
            </label>
            <label className=" mt-[20px] ">
                <span className=" text-[18px] font-bold text-[white] ">Emailname</span>
                <input type="email" placeholder="Enter your email" required className=" w-[100%] h-[40px] rounded-[10px] pl-[20px] mt-[10px] text-[white] text-[15px] outline-none bg-transparent shadow border placeholder:text-[white] " />
            </label>
            <label className=" mt-[20px] ">
                <span className=" text-[18px] font-bold text-[white] ">Password</span>
                <input type="password" placeholder="Enter your name" required className=" w-[100%] h-[40px] mt-[10px] rounded-[10px] pl-[20px] text-[white] text-[15px] outline-none bg-transparent shadow border placeholder:text-[white] " />
            </label>

            <button className=" w-[100%] h-[40px] mt-[20px] btn btn-primary font-bold ">Sign up</button>

        </form>
    )
}

export default SignUp