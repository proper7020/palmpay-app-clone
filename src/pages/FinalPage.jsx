// const FinalPage = () => {
//   return (
//     <footer className="w-full bg-black text-white py-10">
//       <div className="container mx-auto flex flex-wrap justify-between">
//         {/* Logo and Certifications */}
//         <div className="w-full md:w-1/5 flex flex-col items-center mb-6 md:mb-0">
//           <img
//             src="https://www.palmpay.com/_next/static/media/logoLight.c6470eab.png?w=256&q=100"
//             alt=""
//             className="w-3/4 h-auto mb-4"
//           />
//           <div className="flex flex-col items-center">
//             <img
//               src="https://www.palmpay.com/_next/static/media/centralBank.e14647d7.png?w=384&q=100"
//               alt="Central Bank"
//               className="w-3/4 h-auto mb-4"
//             />
//             <img
//               src="https://www.palmpay.com/_next/static/media/PCI.61c854da.png?w=384&q=100"
//               alt="PCI"
//               className="w-3/4 h-auto mb-4"
//             />
//             <img
//               src="https://www.palmpay.com/_next/static/media/NDIC.2b6dc455.png?w=384&q=100"
//               alt="NDIC"
//               className="w-3/4 h-auto mb-4"
//             />
//             <img
//               src="https://www.palmpay.com/_next/static/media/NDPC.5e0c1fc1.png?w=384&q=100"
//               alt="NDPC"
//               className="w-3/4 h-auto mb-4"
//             />
//           </div>
//         </div>

//         {/* App Download Links */}
//         <div className="w-full md:w-1/5 mb-6 md:mb-0">
//           <h3 className="text-lg font-bold mb-4">Personal</h3>
//           <div className="flex flex-col items-start">
//             <ul>
//               <li>Palmpay Aop</li>
//               <li>Send and Receive Money</li>
//               <li>Bill Payment</li>
//               <li>Buy and Shop</li>
//             </ul>
//           </div>
//         </div>

//         {/* Company Information */}
//         <div className="w-full md:w-1/5 mb-6 md:mb-0">
//           <h3 className="text-lg font-bold mb-4">Business</h3>
//           <ul className="space-y-2">
//             <li>
//               <a href="#" className="hover:underline">
//                 Paying
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:underline">
//                 Pay Out
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:underline">
//                 POS
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:underline">
//                 {" "}
//                 Business Acount
//               </a>
//             </li>
//             <li>
//               {" "}
//               <a href="#" className="hover:underline"></a>
//             </li>
//             <li>
//               {" "}
//               <a href="#" className="hover:underline">
//                 Management
//               </a>
//             </li>
//             <li>
//               {" "}
//               <a href="#" className="hover:underline">
//                 {" "}
//                 Agent Network
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Support */}
//         <div className="w-full md:w-1/5 mb-6 md:mb-0">
//           <h3 className="text-lg font-bold mb-4">Company</h3>
//           <ul className="space-y-2">
//             <li>
//               <a href="#" className="hover:underline">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:underline">
//                 Blog
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:underline">
//                 Press and Media
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:underline">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Social Media Links */}
//         <div className="w-full md:w-1/5">
//           <h3 className="text-lg font-bold mb-4">Legal</h3>
//           <div>
//             <div>Privacy Policy</div>
//             <div>Terms & Condition</div>
//             <div>Complaints</div>
//           </div>
//           <div className="flex space-x-4">
//             <div className="flex">
//               <img
//                 src="https://www.palmpay.com/_next/static/media/Instagram.402c19f4.png?w=48&q=100"
//                 alt=""
//               />
//             </div>
//             <div className="flex">
//               <img
//                 src="https://www.palmpay.com/_next/static/media/Facebook.994376ce.png?w=48&q=100"
//                 alt=""
//               />
//             </div>
//             <div className="flex">
//               <img
//                 src="https://www.palmpay.com/_next/static/media/XCorp.24c83d0b.png?w=48&q=100"
//                 alt=""
//               />
//             </div>
//             <div className="flex">
//               <img
//                 src="https://www.palmpay.com/_next/static/media/LinkedIn.ffb330cb.png?w=48&q=100"
//                 alt=""
//               />
//             </div>
//             {/* <a
//               href="https://www.facebook.com/palmpayapp"
//               className="hover:opacity-75"
//             >
//               <img
//                 src="https://www.palmpay.com/_next/static/media/facebook.36a3a56b.png"
//                 alt="Facebook"
//                 className="w-8 h-8"
//               />
//             </a>
//             <a href="https://twitter.com/palmpay" className="hover:opacity-75">
//               <img
//                 src="https://www.palmpay.com/_next/static/media/twitter.b2a42b15.png"
//                 alt="Twitter"
//                 className="w-8 h-8"
//               />
//             </a>
//             <a
//               href="https://www.instagram.com/palmpayapp"
//               className="hover:opacity-75"
//             >
//               <img
//                 src="https://www.palmpay.com/_next/static/media/instagram.e0797e34.png"
//                 alt="Instagram"
//                 className="w-8 h-8"
//               />
//             </a>
//             <a
//               href="https://www.linkedin.com/company/palmpayapp"
//               className="hover:opacity-75"
//             >
//               <img
//                 src="https://www.palmpay.com/_next/static/media/linkedin.0f4d92b2.png"
//                 alt="LinkedIn"
//                 className="w-8 h-8"
//               />
//             </a>     */}
//           </div>
//         </div>
//       </div>

//       {/* Legal Information */}
//       <div>
//         <p className="text-sm py-[2rem]">© 2023 PalmPay. All rights reserved.</p>
//       </div>
//       <div className=" mx-auto text-center mt-8 border-t border-gray-700 pt-4">
//         <p className="text-sm">
//           &copy;PalmPay is a financial service provided by PalmPay Limited,
//           licensed and regulated by the Central Bank of Nigeria (CBN). Deposits
//           are insured by the Nigerian Deposit Insurance Corporation (NDIC). We
//           empower individuals and businesses with payments solutions, high-yield
//           investment opportunities, and easy-to-use tools for financial
//           management. We are a global company with a presence in Nigeria, Ghana,
//           Tanzania, and the United Kingdom.
//         </p>
//         {/* <p className="text-sm">
//           <a href="#" className="hover:underline">
//             Privacy Policy
//           </a>{" "}
//           |{" "}
//           <a href="#" className="hover:underline">
//             Terms of Service
//           </a>
//         </p> */}
//       </div>
//     </footer>
//   );
// };

// export default FinalPage;






const FinalPage = () => {
  return (
    <footer className="w-full bg-black text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Logo and Certifications */}
        <div className="w-full md:w-1/5 flex flex-col items-center mb-6 md:mb-0">
          <img
            src="https://www.palmpay.com/_next/static/media/logoLight.c6470eab.png?w=256&q=100"
            alt="PalmPay Logo"
            className="w-3/4 h-auto mb-4"
          />
          <div className="flex flex-col items-center">
            <img
              src="https://www.palmpay.com/_next/static/media/centralBank.e14647d7.png?w=384&q=100"
              alt="Central Bank"
              className="w-3/4 h-auto mb-4"
            />
            <img
              src="https://www.palmpay.com/_next/static/media/PCI.61c854da.png?w=384&q=100"
              alt="PCI"
              className="w-3/4 h-auto mb-4"
            />
            <img
              src="https://www.palmpay.com/_next/static/media/NDIC.2b6dc455.png?w=384&q=100"
              alt="NDIC"
              className="w-3/4 h-auto mb-4"
            />
            <img
              src="https://www.palmpay.com/_next/static/media/NDPC.5e0c1fc1.png?w=384&q=100"
              alt="NDPC"
              className="w-3/4 h-auto mb-4"
            />
          </div>
        </div>

        {/* App Download Links */}
        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Personal</h3>
          <ul>
            <li>Palmpay App</li>
            <li>Send and Receive Money</li>
            <li>Bill Payment</li>
            <li>Buy and Shop</li>
          </ul>
        </div>

        {/* Business Information */}
        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Business</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Paying
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Pay Out
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                POS
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Business Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Management
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Agent Network
              </a>
            </li>
          </ul>
        </div>

        {/* Company Information */}
        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Press and Media
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Information */}
        <div className="w-full md:w-1/5">
          <h3 className="text-lg font-bold mb-4">Legal</h3>
          <div>
            <div>Privacy Policy</div>
            <div>Terms & Conditions</div>
            <div>Complaints</div>
          </div>
          <div className="flex space-x-4 mt-[6.5rem]">
            <img
              src="https://www.palmpay.com/_next/static/media/Instagram.402c19f4.png?w=48&q=100"
              alt="Instagram"
              className="w-6 h-8"
            />
            <img
              src="https://www.palmpay.com/_next/static/media/Facebook.994376ce.png?w=48&q=100"
              alt="Facebook"
              className="w-6 h-8"
            />
            <img
              src="https://www.palmpay.com/_next/static/media/XCorp.24c83d0b.png?w=48&q=100"
              alt="X Corp"
              className="w-6 h-8"
            />
            <img
              src="https://www.palmpay.com/_next/static/media/LinkedIn.ffb330cb.png?w=48&q=100"
              alt="LinkedIn"
              className="w-6 h-8"
            />
          </div>
        </div>
      </div>

      {/* Legal Notice */}
      <div className="mx-auto text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm">
          &copy; 2024 PalmPay. All rights reserved. PalmPay is a financial
          service provided by PalmPay Limited, licensed and regulated by the
          Central Bank of Nigeria (CBN). Deposits are insured by the Nigerian
          Deposit Insurance Corporation (NDIC). We empower individuals and
          businesses with payments solutions, high-yield investment
          opportunities, and easy-to-use tools for financial management. We are
          a global company with a presence in Nigeria, Ghana, Tanzania, and the
          United Kingdom.
        </p>
      </div>
    </footer>
  );
};

export default FinalPage;

