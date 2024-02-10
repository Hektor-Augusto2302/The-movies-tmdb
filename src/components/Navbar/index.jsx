import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';

const Navbar = () => {
    const [search, setSearch] = useState("");

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!search) return;

        navigate(`/search?q=${search}`);

        setSearch("")

    }

    return (
        <nav className="navbar d-flex align-items-center justify-content-between px-1 py-2">
            <h2>
                <Link to="/" className='ms-3'>
                    <i className="bi bi-camera-video-off"></i> Movies Lib
                </Link>
            </h2>
            <form className='d-flex align-items-center me-3' onSubmit={handleSubmit}>
                <input
                    className='me-2 px-1 py-1 border-0'
                    type="text"
                    placeholder='Pesquise um filme'
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <button role="button" className='px-2 py-1' type='submit'><i className="bi bi-search"></i></button>
            </form>
        </nav>
    )
}

export default Navbar;
