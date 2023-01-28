import logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom"

const Signup = () => {

    const nav = useNavigate()

    return (
        <div>
            <div class="flex flex-col items-center gap-8">
                <img src={logo} alt="" class="w-[200px] cursor-pointer " onClick={() => nav('/')} />
                <p class="text-3xl font-bold text-orange-500  font-serif">Sign Up</p>
            </div>
            <form class="grid grid-cols-2 justify-items-center mt-5">
                <div class="flex flex-col gap-4" >
                    <div>
                        <label htmlFor="name" class="text-xl">
                            Full Name
                        </label><br />
                        <input type="text" class="w-[250px] h-[25px] focus:outline-none focus:shadow-[2px_2px_0_rgba(0,0,0,0.5)] duration-100 border-solid border-2 " />
                    </div>

                    <div>
                        <label htmlFor="email" class="text-xl">Email</label><br />
                        <input type="email" class="w-[250px] h-[25px] border-solid border-2 focus:outline-none focus:shadow-[2px_2px_0_rgba(0,0,0,0.5)] duration-100" />
                    </div>

                    <div>
                        <label htmlFor="phone" class="text-xl">Phone No.</label><br />
                        <input type="text" class="w-[250px] h-[25px] border-solid border-2 focus:outline-none focus:shadow-[2px_2px_0_rgba(0,0,0,0.5)] duration-100" />
                    </div>
                </div>

                <div class="flex flex-col gap-4">
                    <div>
                        <label htmlFor="password" class="text-xl">Password</label><br />
                        <input type="password" class="w-[250px] h-[25px] border-solid border-2 focus:outline-none focus:shadow-[2px_2px_0_rgba(0,0,0,0.5)] duration-100" />
                    </div>

                    <div>
                        <label htmlFor="re-password" class="text-xl">Re-enter Password</label><br />
                        <input type="password" class="w-[250px] h-[25px] border-solid border-2 focus:outline-none focus:shadow-[2px_2px_0_rgba(0,0,0,0.5)] duration-100" />
                    </div>
                </div>

            </form>
            <button class="log border-2 text-[25px] border-solid bg-orange-400 text-white hover:bg-orange-600 hover:shadow-[5px_5px_0_rgba(0,0,0,0.3)]  px-6 py-1 ml-auto mr-auto flex items-center m-5" onClick={() => nav('/login')}>Sign up</button>

        </div>
    )
}

export default Signup