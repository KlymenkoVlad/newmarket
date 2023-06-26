"use client";

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const ProfileLink: React.FC = () => {
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
    <>
      <Link
        href={hasTokenCookie ? "/me" : "/login"}
        className=" mr-7 h-[100px] w-[100px] cursor-pointer flex items-center"
      >
        <Image src="/icons/user.png" alt="user" width={32} height={32} />
        <p className="ml-2">
          {pathname === "/me" || hasTokenCookie ? "Profile" : "Login"}
        </p>
      </Link>

      {hasTokenCookie && (
        <div
          onClick={logout}
          className="ml-4 h-full w-full cursor-pointer flex items-center mt-1"
        >
          <Image src="/signup/logout.svg" alt="user" width={22} height={22} />
        </div>
      )}
    </>
  );
};

ProfileLink.propTypes = {};

export default ProfileLink;
