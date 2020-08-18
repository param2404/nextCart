import Head from 'next/head';
import Navbar from './Navbar'


export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>Next Cart</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous" />
            </Head>
            <Navbar />
            <main>{children}</main>
        </div>
    )
}
