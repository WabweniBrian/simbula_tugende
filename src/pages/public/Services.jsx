import React from "react";
import Banner from "../../components/home/services/service_card";

const Services = () => {
  return (
    <div className="services ">
      <h3 className="service_heading p-1">Featured Services</h3>

      <div className="services_components content-wrapper p-5">
        <ServiceCard
          URL="https://media.istockphoto.com/id/1140615664/photo/guide-talking-to-tourists.jpg?s=612x612&w=0&k=20&c=3YptQ8C9OyH9i45MP4vS-USDQ_lc9cQXJj5Xm7ENdUU="
          servicename="Travel Guides and Tips"
          servicedescription="STL provides travel guides, destination information, and tips for users who are planning their trips. including details about local attractions, hotels, restaurants, and transportation options to enhance the overall travel experience."
        />
        <ServiceCard
          URL="https://static.jobscan.co/blog/uploads/Customer-service-reps.jpg"
          servicename="Customer Support"
          servicedescription="STL provides a dedicated customer support team to assist users with their queries, ticket changes, cancellations, or any other issues they might face during the booking process or while traveling."
        />
        <ServiceCard
          URL="https://images.pexels.com/photos/631954/pexels-photo-631954.jpeg?"
          servicename="Easy and convinient booking"
          servicedescription=" STL ensures a user-friendly interface for seamless booking experiences. Allow customers to easily search for bus routes, choose preferred seats, and select convenient departure times."
        />

        <ServiceCard
          URL="https://www.idesignibuy.com/wp-content/uploads/2017/08/banner31.jpg"
          servicename="Refund and Cancellation"
          servicedescription="STL provides a straightforward and transparent refund and cancellation policy. Allow customers to cancel their bookings and receive refunds according to the terms and conditions set by the bus operators."
        />
        <ServiceCard
          URL="https://thumbs.dreamstime.com/z/cambiamento-40707450.jpg"
          servicename="Booking Modifications"
          servicedescription="STL enables customers to modify their booking details, such as the date, time, or passenger names, within a specified time frame. This feature provides flexibility and convenience for users."
        />
        <ServiceCard
          URL="https://media.istockphoto.com/id/1137539144/photo/view-from-back-seat-at-coach-bus-more-seats-in-blurred-background.jpg?s=612x612&w=0&k=20&c=0vmibUwm2ntH4xT8L2te2grpYimIF8A01h3XZmWIKzY="
          servicename="Seat Selection"
          servicedescription="STL allows users to choose their preferred seats on the bus. Provide a visual seat map with seat availability indicators to help customers make informed decisions."
        />
      </div>
    </div>
  );
};

export default Services;
