// import { useEffect, useState } from "react";
// import logo from "../assets/logo.png"

// const navList = ["Home", "Memories", "Airplanes","Projects"];

// function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);

//     useEffect(() => {
//       const handleScroll = () => {
//         setScrolled(window.scrollY > 700);
//       };
//       window.addEventListener("scroll", handleScroll);
//       return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const handleScrollToSection = (id) => {
//       document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     };
//     return(
//         <nav
//         className={`fixed top-0 left-0 w-full z-50 ${
//           scrolled ? "bg-transparent" : "bg-blue-900 bg-opacity-80"
//         } backdrop-blur-md text-white transition-all duration-300`}
//       >
//         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//           <a href="/" className="flex items-center space-x-4">
//             <img src={logo} alt="Logo" width={50} />
//             <h1 className="text-2xl font-bold text-white">AGRO QANOT</h1>
//           </a>
//           <div className="hidden md:flex space-x-6">
//             {navList.map((item, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => handleScrollToSection(item.toLowerCase())}
//                 className="hover:text-blue-300 transition duration-300"
//               >
//                 {item}
//               </button>
//             ))}
//           </div>
//           <button
//             className="md:hidden focus:outline-none"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path
//                 d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//               />
//             </svg>
//           </button>
//         </div>
//         {menuOpen && (
//           <div className={`md:hidden ${scrolled ? "bg-blue-900 bg-opacity-80" : "bg-blue-900 bg-opacity-80"} text-white absolute top-full left-0 w-full space-y-4 px-6 py-4`}>
//             {navList.map((item, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => handleScrollToSection(item.toLowerCase())}
//                 className="block w-full text-left"
//               >
//                 {item}
//               </button>
//             ))}
//           </div>
//         )}
//       </nav>
//     )
// }

// export default Navbar;