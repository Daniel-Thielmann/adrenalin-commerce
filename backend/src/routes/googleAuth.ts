import { Router } from "express";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { config } from "../config";
import { findOrCreateUser } from "../services/googleAuth";

export const googleAuthRoutes = Router();

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  console.warn("Google OAuth disabled: GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET not set.");
} else {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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

  googleAuthRoutes.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"], session: false })
  );

  googleAuthRoutes.get(
    "/google/callback",
    (req, res, next) => {
      passport.authenticate("google", { session: false }, (err, user) => {
        if (err) {
          console.error("Google auth error:", err);
          return res.redirect(`${config.frontendUrl}/login?error=${encodeURIComponent(err.message || "google_auth_failed")}`);
        }
        if (!user) {
          return res.redirect(`${config.frontendUrl}/login?error=google_auth_failed`);
        }
        req.user = user;
        next();
      })(req, res, next);
    },
    (req, res) => {
      const result = req.user as { token: string; user: { id: number; email: string; name: string; role: string } };
      res.redirect(`${config.frontendUrl}/login?token=${result.token}`);
    }
  );
}
