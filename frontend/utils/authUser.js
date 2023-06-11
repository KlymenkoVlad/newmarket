import axios from "axios";
import Router from "next/router";
import cookie from "js-cookie";

export const redirectUser = (ctx, location) => {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
  } else {
    Router.push(location);
  }
};
