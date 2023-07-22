"use client";

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useStateContext } from "@/context/StateContext";

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
    router.push("/");
  };

  return (
    <>
      <Link
        href={hasTokenCookie ? "/me" : "/login"}
        className={` h-[50px] ${
          notBurgerMenu ? "w-[100px]" : "w-[50px]"
        }  cursor-pointer flex items-center`}
        onClick={() => setShowBurgerMenu(false)}
      >
        {hasTokenCookie ? (
          <Image
            src="/icons/userIn.svg"
            alt="logged in"
            width={32}
            height={32}
          />
        ) : (
          <Image src="/icons/user.png" alt="log in" width={32} height={32} />
        )}
        {notBurgerMenu && (
          <p className="ml-2">
            {pathname === "/me" || hasTokenCookie ? "Profile" : "Login"}
          </p>
        )}
      </Link>

      {hasTokenCookie && (
        <Image
          onClick={logout}
          className="ml-1 cursor-pointer flex items-center mt-1"
          src="/signup/logout.svg"
          alt="user"
          width={22}
          height={22}
        />
      )}
    </>
  );
};

ProfileLink.propTypes = {};

export default ProfileLink;
