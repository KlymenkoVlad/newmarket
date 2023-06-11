import MainPage from "@/components/Layout/MainPage";
import React from "react";

import axios from "axios";
import baseUrl from "@/utils/baseUrl";

type Props = {};

const page = ({ res, aboba }) => {
  console.log(res);
  console.log(aboba);

  return (
    <div>
      <MainPage />
    </div>
  );
};

export default page;
