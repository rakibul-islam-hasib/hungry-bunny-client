import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import FacebookSvg from '../../assets/svg/FacebookSvg';
import InstagramSvg from '../../assets/svg/InstagramSvg';

import { useTitle } from '../../hooks/useTitle';

const AboutTeam = () => {
  const [members, setMembers] = useState([]);
  useTitle('About Team');

  useEffect(() => {
    AOS.init(); // Initialize AOS
    fetch('aboutTeam.json')
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  return (
    <div className="my-10">
      <h1 className="text-4xl font-bold text-center my-10">
        Let&apos;s Meet Our <span className="text-primary">Team Members</span>
      </h1>

      <div className="grid md:grid-cols-2 md:gap-8 gap-3 lg:grid-cols-3 m-auto justify-center">
        {members.map((member, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay={`${idx * 100}`}
            className="rounded-t-full px-3 overflow-hidden shadow-lg hover:border-primary hover:bg-primary hover:bg-opacity-5 border-orange-300 transform transition duration-300 hover:scale-105"
          >
            <div className="text-center flex justify-center ">
              <img
                className="w-80 h-80 rounded-lg"
                src={member.photo_url}
                alt={member.name}
              />
            </div>
            <div className="text-center">
              <div className="font-bold mb-2 ">
                <h1 className="text-3xl mt-5 text-primary">{member.name}</h1>
                <h1 className="text-normal">{member.roll}</h1>
              </div>
              <p className="text-gray-700 h-24 ">{member.description.slice(0, 170)}</p>
            </div>
            <Link to={member.portfolio} className="text-primary font-semibold ">
              Portfolio:<span className="ml-2 ">{member.name}</span>
            </Link>
            <div className="pt-8 flex justify-center gap-4 pb-2">
              <Link className="" to={member.facebook_url}>
                <FacebookSvg className="mx-auto h-10 " /> Facebook
              </Link>
              <Link className="" to={member.instagram_url}>
                <InstagramSvg className="mx-auto h-10 " /> Instagram
              </Link>
              <Link className="" to={member.linkedin_url}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="mx-auto h-10"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#0078d4"
                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                  ></path>
                  <path
                    d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                    opacity=".05"
                  ></path>
                  <path
                    d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                    opacity=".07"
                  ></path>
                  <path
                    fill="#fff"
                    d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                  ></path>
                </svg>
                Linkedin
              </Link>
              <Link className="" to={member.github_url}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="mx-auto h-10"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"
                  ></path>
                </svg>
                Github
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTeam;
