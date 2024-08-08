"use client";

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useStateContext } from "@/context/StateContext";
import { IoMdPerson } from "react-icons/io";
import {
  MdAccountCircle,
  MdOutlineLogout,
  MdOutlinePerson,
} from "react-icons/md";

type ProfileLinkProps = {
  notBurgerMenu?: boolean;
};

const ProfileLink: React.FC<ProfileLinkProps> = ({ notBurgerMenu = true }) => {
  const { setShowBurgerMenu } = useStateContext();

  const router = useRouter();
  const pathname = usePathname();

  const token = Cookies.get("token");
  const [hasTokenCookie, setHasTokenCookie] = useState(false);

  useEffect(() => {
    setHasTokenCookie(Boolean(token));
  }, [token]);

  const logout = () => {
    Cookies.remove("token");
    router.refresh();
  };

  return (
    <div className="ml-3 flex items-center justify-center">
      <Link
        href={hasTokenCookie ? "/me" : "/login"}
        className={`flex cursor-pointer items-center transition-colors hover:text-red-500`}
        onClick={() => setShowBurgerMenu(false)}
      >
        {hasTokenCookie ? (
          <MdAccountCircle className="inline-block text-2xl text-red-500 transition-colors hover:text-red-600" />
        ) : (
          <MdOutlinePerson className="inline-block text-2xl" />
        )}

        <p className="ml-2">
          {pathname === "/me" || (!hasTokenCookie && "Login")}
        </p>
      </Link>

      {hasTokenCookie && (
        <button
          onClick={logout}
          className="flex items-center justify-center transition-colors hover:text-gray-600"
        >
          <MdOutlineLogout className="text-2xl" />
        </button>
      )}
    </div>
  );
};

export default ProfileLink;
