import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
            <div className="container">
                <a className="navbar-brand" href="/">Next Cart</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link href="/"><a className="nav-link">Home</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}