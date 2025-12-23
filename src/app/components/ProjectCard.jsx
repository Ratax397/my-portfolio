/*import React from 'react'
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({imgUrl,title,description,gitUrl,previewUrl}) => {
  return (
    <div>
        <div className='h-52 md:h-72 rounded-t-xl relative group' style={{backgroundImage:`url(${imgUrl})`, backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}>
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm hidden group-hover:flex transition-all duration-500 ">
            <Link href={gitUrl} className='h-14 mr-2 w-14 border-2 relative rounded-full border-white/70 hover:border-white group/link transition-all duration-300'>
              <CodeBracketIcon className='h-10 w-10 text-white/70 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white transition-all duration-300'/>  
            </Link>  
            <Link href='/' className='h-14 w-14 border-2 relative rounded-full border-white/70 hover:border-white group/link transition-all duration-300'>
              <EyeIcon className='h-10 w-10 text-white/70 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white transition-all duration-300'/>
            </Link>  
          </div>
        </div>
        <div className='text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4'>
            <h5 className='text-xl font-semibold mb-2'>{title}</h5>
            <p className='text-[#ADB7BE]'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard
*/

import React from 'react'
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, onPreviewClick }) => {
  return (
    <div>
      <div 
        className='h-52 md:h-72 rounded-t-xl relative group' 
        style={{
          backgroundImage: `url(${imgUrl})`, 
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm hidden group-hover:flex transition-all duration-500">
          
          {/* Icône GitHub */}
          {gitUrl && (
            <Link 
              href={gitUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className='h-14 mr-2 w-14 border-2 relative rounded-full border-white/70 hover:border-white group/link transition-all duration-300'
            >
              <CodeBracketIcon className='h-10 w-10 text-white/70 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white transition-all duration-300'/>  
            </Link>
          )}
          
          {/* Icône Preview - Ouvre le modal */}
          <button 
            onClick={onPreviewClick}
            className='h-14 w-14 border-2 relative rounded-full border-white/70 hover:border-white group/link transition-all duration-300'
          >
            <EyeIcon className='h-10 w-10 text-white/70 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white transition-all duration-300'/>
          </button>
        </div>
      </div>
      
      <div className='text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4'>
        <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        <p className='text-[#ADB7BE]'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard