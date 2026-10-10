import { useEffect, useRef, useState } from "react";
import { BaseLayout } from "../layouts/BaseLayout"
import { EyeClosed,Eye  } from 'lucide-react';

export default function InputPassword(){

    const [type,setType] = useState('password');
    const [password,setPassword] = useState('');
    const ipRef = useRef(null);

    const handleShowPassword = () => {
        type == 'password' ? setType('text') : setType('password')
    }

    useEffect(() => {
        const eventKeyPress = (event) => {
            if(event.ctrlKey && (event.key == 'i' || event.key == 'I')){
                ipRef.current.focus();
            }
        }
        document.addEventListener('keydown',eventKeyPress);
        return () => document.removeEventListener('keydown',eventKeyPress);
    },[])

    return(
        <BaseLayout title="INPUT PASSWORD">
            <div className="mt-5 flex flex-col gap-4 justify-center items-center">
                <div  className="border border-gray-300 rounded-md relative focus-within:outline-blue-600 focus-within:outline-2">
                    <form action="">
                            <input ref={ipRef} type={type} value={password} onChange={(e) => setPassword(e.target.value)} name="password" autoComplete="on" id="password" className="focus:outline-none px-2 py-2 rounded-md shadow-sm w-70 text-sm bg-white"/>

                    {type == 'password' ? (
                        <EyeClosed onClick={handleShowPassword} size={17} className={`absolute right-2 top-2.5 cursor-pointer ${password.trim() != '' ? '' : 'hidden'}`}/>
                    ) : (
                        <Eye onClick={handleShowPassword} size={17} className="absolute right-2 top-2.5 cursor-pointer"/>
                    )}
                    </form>
                    
                </div>

                <div className="flex gap-2 items-center">
                    <span>Press</span>
                    <div className="py-0.5 px-2 rounded-sm bg-gray-100 border-gray-300 border">Ctrl + I</div>
                    <span>to enter password</span>
                </div>
                
            </div>
        </BaseLayout>
    )
}