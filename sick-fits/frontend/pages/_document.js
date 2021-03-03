import Document, { Html, Head, NextScript, Main } from 'next/document';


// the is just boilerplate Next.js code for letting us configue primary HTML page elements
export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
            {/* <Head></Head> */}
            <body>
                <Main />
                <NextScript />
            </body>
            </Html>
        )
    }       
}