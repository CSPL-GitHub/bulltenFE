// import React from "react";
// import { RxCrossCircled } from "react-icons/rx";
// import { Dialog } from "@headlessui/react";
// import { motion, AnimatePresence } from "framer-motion";
// type Props = {};

// const SiteTestResultPopupComponent = (props: Props) => {
//   return (
//     <div>
//       {" "}
//       <Dialog
//         open={isOpen}
//         as="div"
//         className="relative z-10 focus:outline-none"
//         onClose={close}
//       >
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm"
//         />
//         <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//           <div className="flex min-h-full items-center justify-center p-4">
//             <Dialog.Panel
//               as={motion.div}
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="w-full max-w-4xl mt-14 overflow-hidden rounded-2xl bg-gray-100 shadow-2xl"
//             >
//               <div className="relative p-6 sm:p-8">
//                 <button
//                   onClick={close}
//                   className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
//                 >
//                   <RxCrossCircled size={24} />
//                 </button>

//                 {/* Header */}
//                 <div className="text-center py-4">
//                   <p className="text-xl font-semibold text-gray-800">
//                     Test results for:
//                   </p>
//                 </div>

//                 {/* Results Box */}
//                 <div className="bg-white p-6 rounded-xl ">
//                   <h2 className="lg:text-3xl text-xl font-bold text-center mb-6 text-bullt-quaternary">
//                     TESTER RESULTS
//                   </h2>

//                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 gap-3 mb-8">
//                     {[
//                       {
//                         label: "Current Status",
//                         value: "ONLINE",
//                         color: "text-green-600",
//                       },
//                       {
//                         label: "DNS Resolving Time",
//                         value: "0.021 S",
//                         color: "text-blue-600",
//                       },
//                       {
//                         label: "Connection Time",
//                         value: "0.021 S",
//                         color: "text-blue-600",
//                       },
//                       {
//                         label: "Total Time Needed",
//                         value: "1.601 S",
//                         color: "text-purple-600",
//                       },
//                     ].map((item, index) => (
//                       <motion.div
//                         key={index}
//                         initial={{ y: 20, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ delay: index * 0.1 }}
//                         className="text-center p-4 bg-gray-50 rounded-lg shadow-md"
//                       >
//                         <p className="font-semibold text-gray-600 mb-2">
//                           {item.label}
//                         </p>
//                         <p
//                           className={`lg:text-2xl text-xl font-bold ${item.color}`}
//                         >
//                           {item.value}
//                         </p>
//                       </motion.div>
//                     ))}
//                   </div>

//                   <div className="flex flex-wrap justify-center gap-6 mt-8">
//                     {[
//                       { color: "bg-green-500", label: "Positive" },
//                       { color: "bg-yellow-500", label: "Concern" },
//                       { color: "bg-red-500", label: "Negative" },
//                     ].map((item, index) => (
//                       <motion.div
//                         key={index}
//                         initial={{ scale: 0 }}
//                         animate={{ scale: 1 }}
//                         transition={{ delay: 0.5 + index * 0.1 }}
//                         className="flex items-center space-x-2"
//                       >
//                         <span
//                           className={`block w-4 h-4 ${item.color} rounded-full`}
//                         ></span>
//                         <span className="text-gray-700">{item.label}</span>
//                       </motion.div>
//                     ))}
//                   </div>

//                   <motion.div
//                     initial={{ y: 20, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ delay: 0.8 }}
//                     className="mt-10 text-center"
//                   >
//                     <button className="bg-bullt-tertiary border-bullt-tertiary border-[1px] text-white font-semibold px-8 py-3 rounded-full hover:bg-bullt-secondary hover:text-bullt-tertiary hover:border-bullt-tertiary  transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 shadow-lg">
//                       GET STARTED
//                     </button>
//                   </motion.div>
//                 </div>
//               </div>
//             </Dialog.Panel>
//           </div>
//         </div>
//       </Dialog>
//     </div>
//   );
// };

// export default SiteTestResultPopupComponent;
