import { GetServerSideProps } from "next";
import React from "react";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  googleLogout,
} from "@react-oauth/google";

export const getServerSideProps: GetServerSideProps = async () => {
  const googleClientId = process.env.GOOGLE_CLIENT_ID || "";
  const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET || "";

  return {
    props: {
      googleClientId,
      googleClientSecret,
    },
  };
}

function Root({
  googleClientId,
  googleClientSecret,
}: {
  googleClientId: string;
  googleClientSecret: string;
}) {
  const handleSuccess = (res: any) => {
    console.log({ res });
    return res;
  };

  const handleError = () => {
    console.log("error");
  };

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <div>
        <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
        <button onClick={() => googleLogout()}>Google Logout</button>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Root;
