import React, { useState } from "react";
import { useSelector } from "react-redux";
import {  MdFavorite } from "react-icons/md";

import DetailForm from "components/DetailForm";
import Information from "components/Information";
import Button from "components/Button";
import { AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
const UserDetails = () => {
  const { user } = useSelector((state) => state.auth);
  const [show, setShow] = useState(user.user_metadata.firstName ? true : false);

  const date = new Date(user.created_at);
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const day = date.getDate();

  return (
    <main className="col-span-1 flex items-center">
      <section className="bg-gray-900 h-auto mb-10 lg:mb-0 lg:h-[90%] w-full flex flex-col gap-y-5  px-4 py-3 sm:px-10 sm:py-8 rounded-md text-white">
        <h3 className="font-semibold text-2xl">Profile</h3>
        {show && (
          <>
            <Information
              label="First Name"
              data={user.user_metadata.firstName}
            />
            <Information label="Last Name" data={user.user_metadata.lastName} />
            <Information label="Username" data={user.user_metadata.username} />
          </>
        )}
        <Information label="Email" data={user.email} />
        <Information
          label="Created Date"
          data={`${day < 10 ? "0" + day : day}.${
            month < 10 ? "0" + month : month
          }.${year}`}
        />
        <Information label="Email Confirmation" data={user.aud} conf={true} />
        {!show && (
          <>
            {!user.user_metadata.firstName && (
              <p className="text-center text-yellow-400">
                You can add more information about you!{" "}
              </p>
            )}
            <DetailForm />
          </>
        )}

        <div className="flex flex-col mt-auto gap-y-3">
          {show ? (
            <Button
              setShow={setShow}
              show={show}
              s="bg-yellow-500 text-white hover:bg-white hover:text-yellow-500 "
              icon={<AiFillSetting size={20} />}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              setShow={setShow}
              show={show}
              s="bg-red-500 text-white hover:bg-white hover:text-red-500 "
            >
              Back
            </Button>
          )}
          <Link to="/favourites" className="flex w-full">
            <Button
              s="bg-blue-500 text-white hover:bg-white hover:text-blue-500 "
              icon={<MdFavorite size={20} />}
            >
              Go to Favourites
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default UserDetails;
