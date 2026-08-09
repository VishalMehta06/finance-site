import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className="flex justify-between items-center p-3 bg-panel-2 text-text-2 border border-border border-solid">
                <div className="font-bold text-2xl">
                    <h1> <Link to="/"> FinAdvisor </Link> </h1>
                </div>
                <div className="font-bold">
                    <Link to="/" className="p-5"> Home </Link>
                    <Link to="/about" className="p-5"> About </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;