import { Article, LoginBanner } from "@/components";
// import { GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import React from "react";

// export const getServerSideProps: GetServerSideProps = async () => {
//   return {
//     props: {
//     },
//   };
// }

const Home = () => {
  const { status } = useSession();
  const loggedIn = false;

  return (
    <div>
      <h1>{status}</h1>
      {status === "authenticated" ? (
        <>
          <LoginBanner />
          <Article />{" "}
        </>
      ) : (
        <LoginBanner />
      )}
    </div>
  );
};

export default Home;
