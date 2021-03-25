import NProgress from 'nprogress';
import Router from 'next/router';
import '../components/styles/nprogress.css';
import Page from '../components/Page';
import { ApolloProvider } from '@apollo/client';
import withData from '../lib/withData';

// NProgress
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({Component, pageProps, apollo}) => {
    return (
        <ApolloProvider client={apollo}>
            <Page>
                <Component {...pageProps} />
            </Page>
        </ApolloProvider>
    );
}

MyApp.getInitialProps = async function({ Component, ctx }) {
    let pageProps = {};
    if(Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
}

export default withData(MyApp);