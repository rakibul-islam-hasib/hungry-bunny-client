import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineMail, AiOutlinePhone, AiFillFacebook, AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from 'react-router-dom';
import FacebookSvg from '../../assets/svg/FacebookSvg';
import InstagramSvg from '../../assets/svg/InstagramSvg';

const AboutTeam = () => {
  const [members, setMembers] = useState([])

  useEffect(() => {
    fetch('aboutTeam.json')
      .then(res => res.json())
      .then(data => setMembers(data))
  }, [])


  return (
    <div className='my-10'>
      <h1 className='text-4xl font-bold text-center my-10'>Lets Meet Our <span className='text-primary'>Team Members </span> </h1>

      <div className='grid md:grid-cols-2 md:gap-8 gap-3 lg:grid-cols-3 m-auto justify-center'>

        {
          members.map((member, idx) =>

            <div key={idx} title={member.name} className="  rounded-t-full  overflow-hidden shadow-lg   hover:border-primary hover:bg-primary hover:bg-opacity-5 border-orange-300  transform transition duration-300 hover:scale-105">
              <div className='text-center flex justify-center '>
                <img className="w-80 h-80 rounded-lg" src={member.photo_url} alt={member.name}/>
              </div>
              <div className="text-start">
                <div className="font-bold mb-2 ">
                  <h1 className='text-3xl mt-5 text-primary'>{member.name}</h1>
                  <h1 className='text-normal'>{member.roll}</h1>

                </div>
                <p className="text-gray-700 h-24 ">
                  {member.description.slice(0, 170)}
                </p>
              </div>
              <Link to={member.portfolio} className='text-primary font-semibold '> Portfolio:<span className='ml-2 '> {member.name}</span></Link>
              <div className="pt-8 flex justify-center gap-4 pb-2">


                <Link className='' to={member.facebook_url}> <FacebookSvg className='mx-auto h-10 ' />Facebook</Link>
                <Link className='' to={member.instagram_url}> <InstagramSvg className='mx-auto h-10 ' />Instagram</Link>
                <Link className='' to={member.facebook_url}> <FacebookSvg className='mx-auto h-10 ' />Facebook</Link>
                <Link className='' to={member.instagram_url}> <InstagramSvg className='mx-auto h-10 ' />Instagram</Link>

              </div>
            </div>
          )
        }



      </div>
    </div>
  );
};

export default AboutTeam;