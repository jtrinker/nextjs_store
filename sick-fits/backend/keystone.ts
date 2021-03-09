import { createAuth } from '@keystone-next/auth';
import { User } from './schemas/User';
import { Product } from './schemas/Product';
import { ProductImage } from './schemas/ProductImage';
import 'dotenv/config'; // makes our .env variables available
import { config, createSchema } from '@keystone-next/keystone/schema';
import { withItemData, statelessSessions } from '@keystone-next/keystone/session';

const databaseUrl =
    process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360, // how long to stay signed in
    secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
    // we need to tell it which schema is the User -- could be Person, Customer, etc.
    listKey: 'User',
    identityField: 'email',
    secretField: 'password',
    initFirstItem: {
        fields: ['name', 'email', 'password'],
        // TODO: add in initial roles here
    }
});

// keystone boilerplate -- dont worry about understanding everything
export default withAuth(config({
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
        User,
        Product,
        ProductImage
        // schema items go here
    }),
    ui: {
        // only show UI for these people
        isAccessAllowed: ({ session }) => {
            console.log(session);
            return !!session?.data;
        }
    },
    session: withItemData(statelessSessions(sessionConfig), {
        // graphql query
        User: 'id' // passes the id to every session so we have access to all the user info in a session
    })
}));