import Head from 'next/head';
import Navbar from './Navbar'
import { useAmp } from 'next/amp'


export const config = { amp: 'hybrid' }

export default function Layout({ children }) {
    const isAmp = useAmp()
    return (
        <div>
            <Head>
                <title>Next Cart</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
            </Head>
            <Navbar />
            <main>{children}</main>
        </div>
    )
}
