import { User } from './schemas/User';
import 'dotenv/config'; // makes our .env variables available
import { config, createSchema } from '@keystone-next/keystone/schema';

const databaseUrl =
    process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360, // how long to stay signed in
    secret: process.env.COOKIE_SECRET,
};

// keystone boilerplate -- dont worry about understanding everything
export default config({
    server: {
        cors: {
            origin: [process.env.FRONTEND_URL],
            credentials: true, // passes along the cookie so we can use it for auth
        },
    },
    db: {
        adapter: 'mongoose',
        url: databaseUrl,
        // TODO: Add data seeding here
    },
    lists: createSchema({
        User
        // schema items go here
    }),
    ui: {
        // change this for roles
        isAccessAllowed: () => true,
    },
    // add session values here
});