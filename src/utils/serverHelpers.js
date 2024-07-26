import { cookies } from "next/dist/client/components/headers";
import UserModel from "../../models/User";
import connectToDB from "../../configs/db";
import { verifyAccessToken } from "./auth";

const authUser = async () => {
  // const isConnect = await connectToDB();
  // if (isConnect) alert("vasl");
  // const token = cookies().get("token");
  let user = null;

  // if (token) {
  //   const tokenPayload = verifyAccessToken(token.value);
  //   if (tokenPayload) {
  //     user = await UserModel.findOne({ email: tokenPayload.email });
  //   }
  // }

  return user;
};

const authAdmin = async () => {
  connectToDB();
  const token = cookies().get("token");
  let user = null;

  if (token) {
    const tokenPayload = verifyAccessToken(token.value);
    if (tokenPayload) {
      user = await UserModel.findOne({ email: tokenPayload.email });
      if (user.role === "ADMIN") {
        return user;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } else {
    return null;
  }

  return user;
};

export { authUser, authAdmin };
