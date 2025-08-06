const Top = () => {
    return (
        <div className="flex justify-between items-center border-b-2 border-pink-900 px-6 py-4 bg-gray-800">
            <span className="logo">Lovey❤</span>

            <form className="relative">
                <input
                    type="text"
                    placeholder="Search"
                    id="searchInput"
                    name="search"
                    className="srch"
                />
                <button type="submit" className="srchB">
                    🔎
                </button>
            </form>

            <div className="head">
                <a href="#" className="Search-h1">🔍</a>
                <a href="#" className="About-h1">📒</a>
                <a href="#" className="Buy-h1">🪙</a>
                <a href="#" className="Contact-h1">📞</a>
            </div>
        </div>
    );
};
export default Top