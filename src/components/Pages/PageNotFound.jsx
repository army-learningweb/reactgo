import { SectionPage } from "./SectionPage"
import { Link, useNavigate } from "react-router"

function PageNotFound(){
    const navigate = useNavigate();

    const handleRedirect = async() => {
        navigate('/pages',{
            state: { flash: `Quay về thành công` }
        });
    }
    
    return(
        <SectionPage title="404 - LỖI TRANG WEB">
            <p className="text-gray-500">Đường link này không tồn tại trên website</p>
            <button onClick={handleRedirect} className="flex justify-center mt-10 text-blue-600 hover:text-blue-800 mx-auto cursor-pointer">Quay về trang chủ</button>
        </SectionPage>
    )
}

export {PageNotFound}