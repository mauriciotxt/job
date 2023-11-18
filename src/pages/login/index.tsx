import { GetServerSideProps } from 'next';
import React, { useEffect } from 'react'
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

// export const getServerSideProps: GetServerSideProps = async () => {
//   const googleClientId = process.env.GOOGLE_CLIENT_ID || "";
//   const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET || "";

//   return {
//     props: {
//       googleClientId,
//       googleClientSecret,
//     },
//   };
// }

function Login({
  googleClientId,
  googleClientSecret,
}: {
  googleClientId: string;
  googleClientSecret: string;
}) {
  // console.log({ googleClientId });
  
  // useEffect(() => {
  //   function startGoogleScript() {
  //     gapi.client.init({
  //       clientId: googleClientId,
  //       scope: "",
  //     });
  //   }

  //   gapi.load("client: auth2", startGoogleScript);
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
  
  const handleSuccess = (res) => {
    console.log({res});
    return res;
  }

  const handleError = () => {
    console.log("error");
  }

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <div>
        <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
        <button onClick={() => googleLogout()}>Google Logout</button>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Login
