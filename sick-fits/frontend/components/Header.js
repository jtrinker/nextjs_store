import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <div className="bar">
                <Link href="/">Sick Fits</Link>
            </div>
            <div className="sub-bar">
                <p>Search</p>
            </div>
        </header>
    )
}

export default Header;