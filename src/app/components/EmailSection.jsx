"use client"
import React,{useState} from 'react'
import GithubIcon from "../../../public/github-icon.svg"
import FacebookIcon from "../../../public/facebook-icon.svg"
import EmailIcon from "../../../public/gmail-icon.svg"
import WhatsappIcon from "../../../public/whatsapp-icon.svg"
import Image from 'next/image'
import Link from 'next/link'

const EmailSection = () => {

    const [emailSubmitted,setEmailSubmitted]=useState(false)
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const data={
            email:e.target.email.value,
            subject:e.target.subject.value,
            message:e.target.message.value,
        }

        const JSONdata=JSON.stringify(data);
        const endpoint="/api/send";

        const options={
            method: 'POST',

            headers:{
                'content-type':'application/json',
            },

            body:JSONdata,
        }
        const response=await fetch(endpoint,options);
        const resData=await response.json();
        //console.log(resData);
        if(response.status===200){
            console.log("Message envoye");
            setEmailSubmitted(true);
            e.target.reset();

            setTimeout(()=>{
                setEmailSubmitted(false);
            },3000);
        }
    }

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        <div className="absolute top-1/2 -left-20 transform -translate-y-1/2 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"></div>
        <div className='z-10'>
            <h5 className="text-xl font-bold text-white my-2">Envoyez-moi un message</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {" "}
                Vous avez un projet en tête ? Une question ? N&apos;hésitez pas à me contacter, je vous répondrai dans les plus brefs délais.
            </p>
            <div className="socials flex flex-row gap-2">
                <a href="https://github.com/Ratax397" target="_blank" rel="noopener noreferrer">
                    <Image src={GithubIcon} alt="Github" className="hover:opacity-70 transition-opacity duration-300"/>
                </a>
                <a href="https://www.facebook.com/tahirisoa.rajoelison" target="_blank" rel="noopener noreferrer">
                    <Image src={FacebookIcon} alt="Facebook" className="hover:opacity-70 transition-opacity duration-300"/>
                </a>
                <a href="https://wa.me/261347449182" target="_blank" rel="noopener noreferrer">
                    <Image src={WhatsappIcon} alt="WhatsApp" className="hover:opacity-70 transition-opacity duration-300"/>
                </a>
            </div>
        </div>
        <div>
            <form action="" className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" className='text-white mb-2 block text-sm font-medium'>Votre adresse email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        className='bg-[#181818] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-purple-500 focus:outline-none transition-colors' 
                        required 
                        placeholder='exemple@email.com'
                    />
                </div>
                <div>
                    <label htmlFor="subject" className='text-white mb-2 block text-sm font-medium'>Sujet</label>
                    <input 
                        type="text"  
                        id="subject" 
                        name="subject"
                        className='bg-[#181818] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-purple-500 focus:outline-none transition-colors' 
                        required 
                        placeholder='Sujet de votre message'
                    />
                </div>   
                <div>
                    <label htmlFor="message" className='text-white mb-2 block text-sm font-medium'>Message</label>
                    <textarea 
                        name="message" 
                        id="message" 
                        rows="5"
                        className='bg-[#181818] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-purple-500 focus:outline-none transition-colors resize-none' 
                        required
                        placeholder='Décrivez votre projet ou posez votre question...'>
                    </textarea>
                </div> 
                <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>Envoyer</button>
                {
                    emailSubmitted && (
                        <p className="text-green-500 text-sm mt-2">
                            Email envoye avec succes
                        </p>
                    )
                }          
            </form>
        </div>
    </section>
  )
}

export default EmailSection