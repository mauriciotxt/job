import { GetServerSideProps } from "next";
import React from "react";
import { GoogleLogin, GoogleLogout,  } from "react-google-login";

export const getServerSideProps: GetServerSideProps = async () => {
  const googleClientId = process.env.GOOGLE_CLIENT_ID || "";
  const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET || "";

  console.log({ googleClientId });

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
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://apis.google.com/js/api.js";
  //   script.async = true;
  //   script.onload = () => {
  //     window.gapi.load("client:auth2", () => {
  //       // The auth2 library is now loaded and ready to use.
  //       const auth2 = window.gapi.auth2.init({
  //         clientId: googleClientId,
  //         scope: "",
  //       });
  //     });
  //   };
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  const handleSuccess = (res: any) => {
    console.log({ res });
    return res;
  };
  
  const handleFailure = (res: any) => {
    console.log({ res });
    return res;
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={(res) => handleSuccess(res)}
        onFailure={(res) => handleFailure(res)}
        clientId={googleClientId}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
      <GoogleLogout clientId={googleClientId} />
    </div>
  );
}

export default Root;
