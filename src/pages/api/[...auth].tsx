import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { OAuth2Client } from "google-auth-library";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
    }),
  ],
  callbacks: {
    async jwt(token: any, user: {[key: string]: any}) {
      if (user) {
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        const idToken = user.id_token;
        const ticket = await client.verifyIdToken({
          idToken,
          audience: process.env.GOOGLE_CLIENT_ID,
        });
        const { email, email_verified } =
          ticket.getPayload();

        token = {
          ...token,
          email,
          email_verified,
        };
      }
      return token;
    },
  },
});
