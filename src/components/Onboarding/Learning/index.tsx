import { image } from "@/assets/image/image"
import { useNavigate } from "react-router-dom"


const Learning = () => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center items-center">
       <div className="flex justify-center w-full lg:w-[600px] p-6 flex-col gap-6 lg:mt-28">
        <div className="flex items-center flex-col gap-2">
          <img src={image.teaching} alt="Teaching" />
          <span className="text-2xl font-semibold text-center lg:whitespace-nowrap">
            No Learning started
          </span>
          <span className="text-md font-normal text-[#6c6a6a] text-center w-96">
            Share your expertise and inspire others by launching your very own course today.
          </span>
          <button
           onClick={() => navigate('/mylearning/learning')}
            className="bg-primary text-center py-2 text-white rounded-xl w-96 mt-4"
           
          >
             Start a course
          </button>
        </div>
      </div>
       
    </div>
  )
}

export default Learning