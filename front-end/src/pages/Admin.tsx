// // src/pages/Admin.tsx
// import React from "react";
// import AdminContainer from "../components/admin/AdminContainer";
// import PageHeading from "../components/admin/PageHeading";
// import OverviewSection from "../components/admin/OverviewSection";
// import SectionHeading from "../components/admin/SectionHeading";
// import DataTable from "../components/admin/DataTable";

// import { GiPathDistance } from "react-icons/gi";
// import { MdOutlineDirectionsBusFilled } from "react-icons/md";
// import { HiClipboardList } from "react-icons/hi";
// import Header from "../components/layout/Header";
// import Footer from "../components/footer/Footer";

// const Admin: React.FC = () => {
//   return (
//     <>
//     <Header/>
//       <AdminContainer>
//         <PageHeading />

//         <OverviewSection
//           cards={[
//             { icon: <GiPathDistance />, number: 48, label: "Total Trips" },
//             { icon: <HiClipboardList />, number: 325, label: "Total Bookings" },
//             {
//               icon: <MdOutlineDirectionsBusFilled />,
//               number: 12,
//               label: "Upcoming Departures",
//             },
//           ]}
//         />

//         <SectionHeading
//           title="Trip Management"
//           buttons={[{ label: "All Trips" }, { label: "+Add New Trip" }]}
//         />

//         <DataTable
//           columns={[
//             { label: "ID", field: "id" },
//             { label: "Route", field: "route" },
//             { label: "Departure", field: "departure" },
//             { label: "Arrival", field: "arrival" },
//             { label: "Price", field: "price" },
//             { label: "Total Seats", field: "seats" },
//             { label: "Actions", field: "actions" },
//           ]}
//           data={[
//             {
//               id: "T001",
//               route: "London to Paris",
//               departure: "06:00 AM",
//               arrival: "04:00 PM",
//               price: "$70.00",
//               seats: 50,
//               actions: ["edit", "delete"],
//             },
//             {
//               id: "T001",
//               route: "London to Paris",
//               departure: "06:00 AM",
//               arrival: "04:00 PM",
//               price: "$70.00",
//               seats: 50,
//               actions: ["edit", "delete"],
//             },
//             {
//               id: "T001",
//               route: "London to Paris",
//               departure: "06:00 AM",
//               arrival: "04:00 PM",
//               price: "$70.00",
//               seats: 50,
//               actions: ["edit", "delete"],
//             },
//             {
//               id: "T001",
//               route: "London to Paris",
//               departure: "06:00 AM",
//               arrival: "04:00 PM",
//               price: "$70.00",
//               seats: 50,
//               actions: ["edit", "delete"],
//             },
//             {
//               id: "T001",
//               route: "London to Paris",
//               departure: "06:00 AM",
//               arrival: "04:00 PM",
//               price: "$70.00",
//               seats: 50,
//               actions: ["edit", "delete"],
//             },
//             {
//               id: "T001",
//               route: "London to Paris",
//               departure: "06:00 AM",
//               arrival: "04:00 PM",
//               price: "$70.00",
//               seats: 50,
//               actions: ["edit", "delete"],
//             },
//             {
//               id: "T001",
//               route: "London to Paris",
//               departure: "06:00 AM",
//               arrival: "04:00 PM",
//               price: "$70.00",
//               seats: 50,
//               actions: ["edit", "delete"],
//             },
//           ]}
//         />

//         <SectionHeading
//           title="Booking Management"
//           buttons={[{ label: "All Bookings" }, { label: "Verify QR" }]}
//         />

//         <DataTable
//           columns={[
//             { label: "Booking ID", field: "bookingId" },
//             { label: "User", field: "user" },
//             { label: "Trip Route", field: "route" },
//             { label: "Date", field: "date" },
//             { label: "Seats", field: "seats" },
//             { label: "Status", field: "status" },
//             { label: "QR Verified", field: "qr" },
//             { label: "Actions", field: "actions" },
//           ]}
//           data={[
//             {
//               bookingId: "B1001",
//               user: "Alice Smith",
//               route: "London to Paris",
//               date: "2024-07-26",
//               seats: "A1, A2",
//               status: "Confirmed",
//               qr: "verified",
//               actions: ["edit", "delete"],
//             },
//             {
//               bookingId: "B1002",
//               user: "Bob Johnson",
//               route: "Rome to Florence",
//               date: "2024-07-24",
//               seats: "C5",
//               status: "Pending",
//               qr: "pending",
//               actions: ["edit", "delete"],
//             },
//             {
//               bookingId: "B1003",
//               user: "Charlie Brown",
//               route: "Berlin to Munich",
//               date: "2024-07-30",
//               seats: "F13, F14, F15",
//               status: "Confirmed",
//               qr: "verified",
//               actions: ["edit", "delete"],
//             },
//             {
//               bookingId: "B1003",
//               user: "Charlie Brown",
//               route: "Berlin to Munich",
//               date: "2024-07-30",
//               seats: "F13, F14, F15",
//               status: "Confirmed",
//               qr: "verified",
//               actions: ["edit", "delete"],
//             },
//           ]}
//         />
//       </AdminContainer>
//       <Footer/>
//     </>
//   );
// };

// export default Admin;









import React, { useState } from "react";
import AdminContainer from "../components/admin/AdminContainer";
import PageHeading from "../components/admin/PageHeading";
import OverviewSection from "../components/admin/OverviewSection";
import SectionHeading from "../components/admin/SectionHeading";
import DataTable from "../components/admin/DataTable";
import AddTripModal from "../components/admin/AddTripModal"; // ✅ IMPORT

import { GiPathDistance } from "react-icons/gi";
import { MdOutlineDirectionsBusFilled } from "react-icons/md";
import { HiClipboardList } from "react-icons/hi";

const Admin: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <AdminContainer>
      <PageHeading />

      <OverviewSection
        cards={[
          { icon: <GiPathDistance />, number: 48, label: "Total Trips" },
          { icon: <HiClipboardList />, number: 325, label: "Total Bookings" },
          {
            icon: <MdOutlineDirectionsBusFilled />,
            number: 12,
            label: "Upcoming Departures",
          },
        ]}
      />

      <SectionHeading
        title="Trip Management"
        buttons={[
          { label: "All Trips" },
          { label: "+Add New Trip", onClick: () => setOpenModal(true) }, // ✅ Modal trigger
        ]}
      />

      <DataTable
          columns={[
            { label: "ID", field: "id" },
            { label: "Route", field: "route" },
            { label: "Departure", field: "departure" },
            { label: "Arrival", field: "arrival" },
            { label: "Price", field: "price" },
            { label: "Total Seats", field: "seats" },
            { label: "Actions", field: "actions" },
          ]}
          data={[
            {
              id: "T001",
              route: "London to Paris",
              departure: "06:00 AM",
              arrival: "04:00 PM",
              price: "$70.00",
              seats: 50,
              actions: ["edit", "delete"],
            },
            {
              id: "T001",
              route: "London to Paris",
              departure: "06:00 AM",
              arrival: "04:00 PM",
              price: "$70.00",
              seats: 50,
              actions: ["edit", "delete"],
            },
            {
              id: "T001",
              route: "London to Paris",
              departure: "06:00 AM",
              arrival: "04:00 PM",
              price: "$70.00",
              seats: 50,
              actions: ["edit", "delete"],
            },
            {
              id: "T001",
              route: "London to Paris",
              departure: "06:00 AM",
              arrival: "04:00 PM",
              price: "$70.00",
              seats: 50,
              actions: ["edit", "delete"],
            },
            {
              id: "T001",
              route: "London to Paris",
              departure: "06:00 AM",
              arrival: "04:00 PM",
              price: "$70.00",
              seats: 50,
              actions: ["edit", "delete"],
            },
            {
              id: "T001",
              route: "London to Paris",
              departure: "06:00 AM",
              arrival: "04:00 PM",
              price: "$70.00",
              seats: 50,
              actions: ["edit", "delete"],
            },
            {
              id: "T001",
              route: "London to Paris",
              departure: "06:00 AM",
              arrival: "04:00 PM",
              price: "$70.00",
              seats: 50,
              actions: ["edit", "delete"],
            },
          ]}
        />

      <SectionHeading
        title="Booking Management"
        buttons={[
          { label: "All Bookings" },
          { label: "Verify QR" },
        ]}
      />

      <DataTable
          columns={[
            { label: "Booking ID", field: "bookingId" },
            { label: "User", field: "user" },
            { label: "Trip Route", field: "route" },
            { label: "Date", field: "date" },
            { label: "Seats", field: "seats" },
            { label: "Status", field: "status" },
            { label: "QR Verified", field: "qr" },
            { label: "Actions", field: "actions" },
          ]}
          data={[
            {
              bookingId: "B1001",
              user: "Alice Smith",
              route: "London to Paris",
              date: "2024-07-26",
              seats: "A1, A2",
              status: "Confirmed",
              qr: "verified",
              actions: ["edit", "delete"],
            },
            {
              bookingId: "B1002",
              user: "Bob Johnson",
              route: "Rome to Florence",
              date: "2024-07-24",
              seats: "C5",
              status: "Pending",
              qr: "pending",
              actions: ["edit", "delete"],
            },
            {
              bookingId: "B1003",
              user: "Charlie Brown",
              route: "Berlin to Munich",
              date: "2024-07-30",
              seats: "F13, F14, F15",
              status: "Confirmed",
              qr: "verified",
              actions: ["edit", "delete"],
            },
            {
              bookingId: "B1003",
              user: "Charlie Brown",
              route: "Berlin to Munich",
              date: "2024-07-30",
              seats: "F13, F14, F15",
              status: "Confirmed",
              qr: "verified",
              actions: ["edit", "delete"],
            },
          ]}
        />

      <AddTripModal open={openModal} onClose={() => setOpenModal(false)} /> {/* ✅ Add here */}
    </AdminContainer>
  );
};

export default Admin;
