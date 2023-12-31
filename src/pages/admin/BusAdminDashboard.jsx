import React from "react";
import AnalyticsCards from "../../components/admin/reports/AnalyticsCards";
import NotificationsList from "../../components/admin/notifications/NotificationsList";
import RecentOrders from "../../components/admin/home/RecentOrders";
import { BiBusSchool, BiMoney } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { GiRoad } from "react-icons/gi";

const BusAdminDashboard = () => {
  const cardsData = [
    {
      id: 1,
      value: 1000,
      title: "Total Reservations",
      icon: <MdAirlineSeatReclineExtra />,
      classes: "!bg-secondaryBlue/20 text-secondaryBlue",
    },
    {
      id: 2,
      value: 4,
      title: "Reservations Today",
      icon: <MdAirlineSeatReclineExtra />,
      classes: "!bg-cyan-600/20 text-cyan-600",
    },
    {
      id: 3,
      value: 5,
      title: "Functional Routes",
      icon: <GiRoad />,
      classes: "!bg-primary/20 text-primary",
    },
    {
      id: 4,
      value: 5,
      title: "Functional Buses",
      icon: <BiBusSchool />,
      classes: "!bg-secondary/20 text-secondary",
    },
    {
      id: 5,
      value: "45,000,000",
      title: "Total Income",
      icon: <BiMoney />,
      classes: "!bg-tertiary/20 text-tertiary",
    },
    {
      id: 6,
      value: 450,
      title: "Total Customers",
      icon: <FiUsers />,
      classes: "!bg-secondaryYellow/20 text-secondaryYellow",
    },
  ];
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>
      <div className="mt-5">
        <AnalyticsCards cardsData={cardsData} />
      </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <RecentOrders />
        </div>
        <div className="lg:col-span-1 card">
          <NotificationsList />
        </div>
      </div>
    </div>
  );
};

export default BusAdminDashboard;
