import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineMail, AiOutlinePhone, AiFillFacebook, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { Link } from 'react-router-dom';

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
          members.map((member,idx) =>
            
      <div key={idx} className="max-w-[24rem] rounded rounded-t-full  overflow-hidden shadow-lg">
        <div className='text-center flex justify-center '>
        <img className="w-80 h-96 rounded-full" src={member.photo_url} alt="Sunset in the mountains" />
        </div>
          <div className="px-6 py-4">
            <div className="font-bold mb-2 text-center">
              <h1 className='text-xl '>{member.roll}</h1>
              <h1 className='text-3xl mt-5 text-primary'>{member.name}</h1>
              {/* <h1>{member.roll}</h1> */}
            </div>
            <p className="text-gray-700 text-base text-center">
              {member.description}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 text-center border-b-2 border-primary">
            <Link className='inline-block rounded-full px-3 py-1 text-4xl font-semibold text-gray-700 mr-5 mb-2' to={member.facebook_url}><AiFillFacebook /></Link>
            <Link className='inline-block  rounded-full px-3 py-1 text-4xl font-semibold text-gray-700 mr-5 mb-2' to={member.github_url}><AiFillGithub /> </Link>
            <Link className='inline-block  rounded-full px-3 py-1 text-4xl font-semibold text-gray-700 mr-5 mb-2' to={member.instagram_url}><AiFillInstagram /> </Link>
          </div>
      </div>
            )
        }



      {/* <div className="max-w-sm rounded rounded-t-full  overflow-hidden shadow-lg">
        <div className='text-center'>
        <img className="w-50 rounded-full" src="https://www.w3schools.com/w3images/avatar2.png" alt="Sunset in the mountains" />
        </div>
          <div className="px-6 py-4">
            <div className="font-bold mb-2 text-center">
              <h1 className='text-xl'>Web Developer</h1>
              <h1 className='text-3xl mt-5'>Name</h1>
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 text-center">
            <span className="inline-block rounded-full px-3 py-1 text-4xl font-semibold text-gray-700 mr-5 mb-2"> <AiFillFacebook /> </span>
            <span className="inline-block  rounded-full px-3 py-1 text-4xl font-semibold text-gray-700 mr-5 mb-2"><AiFillGithub /></span>
            <span className="inline-block  rounded-full px-3 py-1 text-4xl font-semibold text-gray-700 mr-5 mb-2"><AiFillInstagram /></span>
          </div>

          <div className="px-6 pt-4 pb-2 text-center">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
      </div>
      <div className="max-w-sm rounded rounded-t-full  overflow-hidden shadow-lg">
        <div className='text-center'>
        <img className="w-50 rounded-full" src="https://www.w3schools.com/w3images/avatar2.png" alt="Sunset in the mountains" />
        </div>
          <div className="px-6 py-4">
            <div className="font-bold mb-2 text-center">
              <h1 className='text-xl'>Web Developer</h1>
              <h1 className='text-3xl mt-5'>Name</h1>
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 text-center">
            <span className="inline-block rounded-full px-3 py-1 text-4xl font-semibold text-gray-700 mr-5 mb-2"> <AiFillFacebook /> </span>
            <span className="inline-block  rounded-full px-3 py-1 text-4xl font-semibold text-gray-700 mr-5 mb-2"><AiFillGithub /></span>
            <span className="inline-block  rounded-full px-3 py-1 text-4xl font-semibold text-gray-700 mr-5 mb-2"><AiFillInstagram /></span>
          </div>

          <div className="px-6 pt-4 pb-2 text-center">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
      </div>
      <div className="max-w-sm rounded rounded-t-full overflow-hidden shadow-lg">
        <div className='text-center'>
        <img className="w-50 rounded-full" src="https://www.w3schools.com/w3images/avatar2.png" alt="Sunset in the mountains" />
        </div>
          <div className="px-6 py-4">
            <div className="font-bold mb-2 text-center">
              <h1 className='text-xl'>Web Developer</h1>
              <h1 className='text-3xl mt-5'>Name</h1>
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 text-center">
            <span className="inline-block rounded-full px-3 py-1 text-4xl font-semibold text-gray-700 mr-5 mb-2"> <AiFillFacebook /> </span>
            <span className="inline-block  rounded-full px-3 py-1 text-4xl font-semibold text-gray-700 mr-5 mb-2"><AiFillGithub /></span>
            <span className="inline-block  rounded-full px-3 py-1 text-4xl font-semibold text-gray-700 mr-5 mb-2"><AiFillInstagram /></span>
          </div>

          <div className="px-6 pt-4 pb-2 text-center">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
      </div>
      <div className="max-w-sm rounded rounded-t-full overflow-hidden shadow-lg">
        <div className='text-center'>
        <img className="w-50 rounded-full" src="https://www.w3schools.com/w3images/avatar2.png" alt="Sunset in the mountains" />
        </div>
          <div className="px-6 py-4">
            <div className="font-bold mb-2 text-center">
              <h1 className='text-xl'>Web Developer</h1>
              <h1 className='text-3xl mt-5'>Name</h1>
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 text-center">
            <span className="inline-block rounded-full px-3 py-1 text-4xl font-semibold text-gray-700 mr-5 mb-2"> <AiFillFacebook /> </span>
            <span className="inline-block  rounded-full px-3 py-1 text-4xl font-semibold text-gray-700 mr-5 mb-2"><AiFillGithub /></span>
            <span className="inline-block  rounded-full px-3 py-1 text-4xl font-semibold text-gray-700 mr-5 mb-2"><AiFillInstagram /></span>
          </div>

          <div className="px-6 pt-4 pb-2 text-center">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
      </div>
      <div className="max-w-sm rounded rounded-t-full overflow-hidden shadow-lg">
        <div className='text-center'>
        <img className="w-50 rounded-full" src="https://www.w3schools.com/w3images/avatar2.png" alt="Sunset in the mountains" />
        </div>
          <div className="px-6 py-4">
            <div className="font-bold mb-2 text-center">
              <h1 className='text-xl'>Web Developer</h1>
              <h1 className='text-3xl mt-5'>Name</h1>
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 text-center">
            <span className="inline-block rounded-full px-3 py-1 text-4xl font-semibold text-gray-700 mr-5 mb-2"> <AiFillFacebook /> </span>
            <span className="inline-block  rounded-full px-3 py-1 text-4xl font-semibold text-gray-700 mr-5 mb-2"><AiFillGithub /></span>
            <span className="inline-block  rounded-full px-3 py-1 text-4xl font-semibold text-gray-700 mr-5 mb-2"><AiFillInstagram /></span>
          </div>

          <div className="px-6 pt-4 pb-2 text-center">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
      </div> */}
      </div>
    </div>
  );
};

export default AboutTeam;