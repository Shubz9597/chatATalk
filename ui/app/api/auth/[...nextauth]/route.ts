import NextAuth, { Account, NextAuthOptions } from 'next-auth';
import GoogleProvider, {GoogleProfile} from 'next-auth/providers/google'
import {createOrUpdateuser} from '@/app/lib/userRoutes'
import GithubProvider from 'next-auth/providers/github'


export const nextAuthOptions: NextAuthOptions = {  
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_SECRET!
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_SECRET!
        })
    ],
    session: {
        maxAge: 24*60*60,
        strategy: 'jwt'
    },
    callbacks: {
        async signIn({account, profile}) {
            try{
                let user : User = {
                    username: '',
                    email: '',
                    avatar: ''
                };
                if(!profile?.email) {
                    throw new Error('No profile')
                } 
                if(account?.provider === 'google') {
                    user = {
                        ...user,
                        username: profile.name,
                        email: profile.email,
                        avatar: profile.picture
                    }
                } else {
                    user = {
                        ...user,
                        username: profile.name,
                        email: profile.email!,
                        avatar: profile.avatar_url
                    }
                }
                
                //If there is no person present then we will call an post api to backend
                await createOrUpdateuser(user);
                return true;
            } catch(err) {
                console.error(err);
                throw new Error('There is some problem with the server')
            }
            
        },
        async jwt({token, account}) {
            if(account) {
                token.accessToken = account.access_token
            }

            return token;
        },
    },

    pages: {
        signIn: '/auth/login'
    }
}

const handler = NextAuth(nextAuthOptions);


export {handler as GET, handler as POST};
