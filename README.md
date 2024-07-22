# Hall Booking API
## Introduction
The Hall Booking API is a robust solution for managing hall bookings. It provides a set of endpoints to handle various aspects of room management and booking. This API supports functionalities for creating rooms, booking them, and retrieving detailed information about bookings and customers. The goal of this API is to streamline the process of booking rooms and managing customer information efficiently.

## Task overview

This API accomplishes the following tasks:

- Creating a Room: Allows for the addition of a new room with specific attributes.
- Booking a Room: Facilitates the reservation of a room by a customer.
- Listing All Rooms with Booked Data: Provides detailed information about rooms and their booking status.
- Listing All Customers with Booked Data: Displays customer details along with their booking information.
- Customer Booking Details: Shows how many times a customer has booked a room, including detailed booking information.


## API Endpoints: `http://localhost:5000/api/room`
1. **/createrooms**: Add a new room with specific attributes such as number of seats, amenities, and hourly pricing.
2. **/bookroom**: Make a reservation for a room with customer details, date, start time, end time, and room ID.
3. **/getbookedrooms**: Retrieve detailed information about all rooms, including their booking status and related data.
4. **/getallcustomers**: Get a comprehensive list of customers along with their booking details.
5. **/customercount**: Obtain detailed information on how many times a customer has booked rooms, including booking IDs and statuses.

## PostMan Documentation:
https://documenter.getpostman.com/view/37156344/2sA3kVkLvs





