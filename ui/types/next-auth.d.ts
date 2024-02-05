import NextAuth from "next-auth";
import { GithubProfile } from "next-auth/providers/github";
import { GoogleProfile } from "next-auth/providers/google";

declare module "next-auth" {
    interface Profile extends GoogleProfile, GithubProfile {}
}