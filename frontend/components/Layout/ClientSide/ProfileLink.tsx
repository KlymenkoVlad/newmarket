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
import { MdOutlinePerson } from "react-icons/md";

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
    <div>
      <Link
        href={hasTokenCookie ? "/me" : "/login"}
        className={`flex cursor-pointer items-center p-2`}
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
          <MdOutlinePerson className="inline-block text-2xl" />
        )}

        <p className="ml-2">
          {pathname === "/me" || hasTokenCookie ? "Profile" : "Login"}
        </p>
      </Link>

      {hasTokenCookie && (
        <Image
          onClick={logout}
          className="ml-1 mt-1 flex cursor-pointer items-center"
          src="/signup/logout.svg"
          alt="user"
          width={22}
          height={22}
        />
      )}
    </div>
  );
};

ProfileLink.propTypes = {};

export default ProfileLink;
