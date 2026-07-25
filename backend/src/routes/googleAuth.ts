import { Router } from "express";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { config } from "../config";
import { findOrCreateUser } from "../services/googleAuth";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      callbackURL: `${config.backendUrl}/api/auth/google/callback`,
    },
    async (_accessToken, _refreshToken, profile, done) => {
      try {
        const googleId = profile.id;
        const email = profile.emails?.[0]?.value || "";
        const name = profile.displayName || email.split("@")[0];
        const result = await findOrCreateUser({ googleId, email, name });
        done(null, result);
      } catch (err) {
        done(err as Error);
      }
    }
  )
);

export const googleAuthRoutes = Router();

googleAuthRoutes.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"], session: false })
);

googleAuthRoutes.get(
  "/google/callback",
  passport.authenticate("google", { session: false, failureRedirect: config.frontendUrl + "/login?error=google_auth_failed" }),
  (req, res) => {
    const result = req.user as { token: string; user: { id: number; email: string; name: string; role: string } };
    res.redirect(`${config.frontendUrl}/login?token=${result.token}`);
  }
);
