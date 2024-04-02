import { useSelector } from "react-redux"
import Logout from "./log/Logout"
import SignUp from "./log/SignUp"

const App = () => {

  const login = useSelector(state => state.auth.isLogin)

  return (
    <div className=" bg-cover w-[100%] h-[100vh] bg-nature flex justify-center items-center ">
      {!login && <SignUp />}
      {login && <Logout />}
    </div>
  )
}

export default App