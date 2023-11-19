import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

console.log({
  GOOGLE_ID: process.env?.GOOGLE_ID,
  GOOGLE_SECRET: process.env?.GOOGLE_SECRET,
  SECRET: process.env.SECRET,
});

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
  ],
};

export default NextAuth(authOptions);
