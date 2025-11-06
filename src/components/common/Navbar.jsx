import { IoSearchOutline } from "react-icons/io5";


const Navbar = () => {

    return (
        <nav className="flex items-center justify-between bg-green-500">
            {/* logo section  */}
            <img src="./logo.png" alt="Next Room" className="w-36 h-auto"/>

            {/* menu section  */}
            <ul className="flex items-center gap-3 text-base">
                <li>Home</li>
                <li>Hotels</li>
                <li>Experience</li>
                <li>About</li>
            </ul>

            {/* button section  */}
            <div className="flex items-center gap-4">
                <IoSearchOutline className="text-2xl"/>
                <button className="bg-black rounded-full px-6 py-3 text-white font-medium">Login</button>
            </div>
        </nav>
    );
};

export default Navbar;