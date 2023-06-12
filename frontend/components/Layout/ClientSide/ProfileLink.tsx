"use client";

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";

interface ProfileLinkProps {
  token: string | undefined;
}

const ProfileLink: React.FC<ProfileLinkProps> = ({ token }) => {
  const [hasTokenCookie, setHasTokenCookie] = useState(false);

  useEffect(() => {
    setHasTokenCookie(Boolean(Cookies.get("token")));
  }, []);

  return (
    <Link
      href={hasTokenCookie ? "/me" : "/login"}
      className="ml-4 h-full w-full cursor-pointer flex items-center"
    >
      <Image src="/icons/user.png" alt="user" width={32} height={32} />
      <p className="ml-2">{hasTokenCookie ? "Profile" : "Login"}</p>
    </Link>
  );
};

ProfileLink.propTypes = {};

export default ProfileLink;
