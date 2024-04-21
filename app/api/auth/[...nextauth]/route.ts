import NextAuth from "next-auth";

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) return url;
      // Redirect to dashboard after sign-in
      return baseUrl + "/dashboard";
    },
  },
});

export { handler as GET, handler as POST };
