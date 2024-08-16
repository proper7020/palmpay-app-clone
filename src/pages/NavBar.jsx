
import { useState } from "react";
import DropDown from "./DropDown";

const NavBar = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <nav
        className="flex justify-between items-center fixed w-full z-40 bg-white top-0= px-[5rem] py-[1rem] mt-"
        style={{ position: "" }}
      >
        <div>
          <img
            src="https://www.palmpay.com/_next/static/media/logo.e481427a.png?w=384&q=100"
            alt="Logo"
            className="w-[9rem]"
          />
        </div>

        <div className={`w-[65%] ${toggle ? "block" : "hidden"} sm:flex`}>
          <ul className="flex justify-between items-center font-medium gap-x-10">
            <DropDown text="Personal" />
            <DropDown text="Business" />
            <li className="relative group">
              <a href="#" className="hover:text-gray-700">
                Company
              </a>
              <ul className="absolute hidden group-hover:block bg-white shadow-lg p-4 mt-2 space-y-2 text-gray-700">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Press & Media
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Contact
                  </a>
                </li>
              </ul>
            </li>
            <DropDown text="Developers" />
            <DropDown text="Pricing" />
          </ul>
        </div>
        <div className="relative group">
          <button className="flex items-center focus:outline-none">
            <img
              src="https://static.chuanyinet.com/files/felowqnu47fbrr0i/NG.png?w=48&q=100"
              alt="Nigeria Flag"
              className="h-[2rem]"
            />
          </button>
          <ul className="absolute hidden group-hover:block bg-white shadow-lg p-2 mt-2 space-y-2 text-gray-700 right-0">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                <img
                  src="https://static.chuanyinet.com/files/felowqnu47fbrr0i/NG.png?w=48&q=100"
                  alt="Nigeria Flag"
                  className="h-[2rem]"
                />
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                <img
                  src="https://static.chuanyinet.com/files/feloxounitlx80b3/Ghana.png?w=48&q=100"
                  alt="Ghana Flag"
                  className="h-[2rem]"
                />
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                <img
                  src="https://static.chuanyinet.com/files/feloxouottwqrbq4/Flag_of_Tanzania%201.png?w=48&q=100"
                  alt="Tanzania Flag"
                  className="h-[2rem]"
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;




// import { useState } from "react";
// import DropDown from "./DropDown";

// const NavBar = () => {
//   const [toggle, setToggle] = useState(true);

//   return (
//     <nav className="flex justify-between items-center px-20 py-4 mt-7">
//       <div>
//         <img
//           src="https://www.palmpay.com/_next/static/media/logo.e481427a.png?w=384&q=100"
//           alt="Logo"
//           className="w-36"
//         />
//       </div>

//       <div className={`w-2/3 ${toggle ? "block" : "hidden"} sm:flex`}>
//         <ul className="flex justify-between items-center font-medium gap-x-10">
//           <DropDown text="Personal" />
//           <DropDown text="Business" />
//           <li className="relative group">
//             <a href="#" className="hover:text-gray-700">
//               Company
//             </a>
//             <ul className="absolute hidden group-hover:block bg-white shadow-lg p-4 mt-2 space-y-2 text-gray-700">
//               <li>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Blog
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Press & Media
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </li>
//           <DropDown text="Developers" />
//           <DropDown text="Pricing" />
//         </ul>
//       </div>
//       <div className="relative group">
//         <button className="flex items-center focus:outline-none">
//           <img
//             src="https://static.chuanyinet.com/files/felowqnu47fbrr0i/NG.png?w=48&q=100"
//             alt="Nigeria Flag"
//             className="h-8"
//           />
//         </button>
//         <ul className="absolute hidden group-hover:block bg-white shadow-lg p-2 mt-2 space-y-2 text-gray-700 right-0">
//           <li>
//             <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//               <img
//                 src="https://static.chuanyinet.com/files/felowqnu47fbrr0i/NG.png?w=48&q=100"
//                 alt="Nigeria Flag"
//                 className="h-8"
//               />
//             </a>
//           </li>
//           <li>
//             <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//               <img
//                 src="https://static.chuanyinet.com/files/feloxounitlx80b3/Ghana.png?w=48&q=100"
//                 alt="Ghana Flag"
//                 className="h-8"
//               />
//             </a>
//           </li>
//           <li>
//             <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//               <img
//                 src="https://static.chuanyinet.com/files/feloxouottwqrbq4/Flag_of_Tanzania%201.png?w=48&q=100"
//                 alt="Tanzania Flag"
//                 className="h-8"
//               />
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

