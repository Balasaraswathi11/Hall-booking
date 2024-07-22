// Controller/Hallbooking.js
const rooms = [
  {
    room_id: 1,
    room_name: 'room-101',
    amenities: 'TV, Refrigerator, Microwave',
    seats: 3,
    price_per_hrs: 1200
  },
  {
    room_id: 2,
    room_name: 'room-102',
    amenities: 'TV, Air Conditioner, Heater',
    seats: 2,
    price_per_hrs: 1500
  },
  {
    room_id: 3,
    room_name: 'room-103',
    amenities: 'TV, Sofa, Table',
    seats: 5,
    price_per_hrs: 900
  }
];



export const getallrooms=(req,res)=>{
  res.status(200).json({message:"rooms successfully fetched",data:rooms})
}



export const createrooms=(req,res)=>{
  const {room_name,amenities,seats,price_per_hrs}=req.body
  const newroom={ room_id: rooms.length + 1,
        room_name,
        amenities,
        seats,
        price_per_hrs}

        rooms.push(newroom)
        res.status(200).json({message:"Room created succeessfully",data:newroom})
}



let bookedrooms = [
    {customer_id:"10",
     customer_name:"bala",
      date:"09.7.24",
      start_time:"09.7.24",
      end_time:"11.12.24",
      room_id: 1,
      booking_id:1,
      status:"booked"
   
    },
    {customer_id:"20",
      customer_name:"saraswathi",
       date:"13.7.24",
       start_time:"13.7.24",
       end_time:"15.7.24",
       room_id: 2 ,
       booking_id:2,
       status:"booked"
   
     },
     {customer_id:"30",
      customer_name:"sandhiya",
       date:"28.7.24",
       start_time:"28.7.24",
       end_time:"30.7.24",
       room_id: 3,
       booking_id:3,
       status:"booked"
   
     }
  ];




  export const bookaroom = (req, res) => {
      const { customer_id,customer_name, date, start_time, end_time, room_id } = req.body;
      
      // Check if the room is available
      const room = rooms.find(room =>  room.room_id === room_id);
      if (!room) {
        return res.status(404).json({ message: "Room not available or not found" });
      }
    
      // Check if the room is already booked on the given date and time
      const bookingsOnDate = bookedrooms.filter(booking =>
        booking.room_id === room_id && booking.date === date
       
      );
    
      if (bookingsOnDate.length > 0) {
        return res.status(400).json({ message: "Room is already booked for the selected date and time" });
      } else {
        // Create a new booking
        const newBooking = {
          customer_id:parseInt(customer_id),
          customer_name,
          date,
          start_time,
          end_time,
          room_id,
          booking_id: bookedrooms.length + 1,
          status:"booked"
        };
    
        
    
        // Add the new booking to bookedrooms
        bookedrooms.push(newBooking);
        console.log("Booking Room:", bookedrooms);
    
        // Respond with success message and booking details
        res.status(201).json({ message: "Room booked successfully", data: bookedrooms });
      }
    };
//list all rooms with Booked data 
    export const getallbookedrooms = (req, res) => {
      const details = bookedrooms.map((book) => {
        const room = rooms.find((room) => room.room_id === book.room_id);
        return {
           room_name: room ? room.room_name : 'Room not found',
           status: book.status,
        
          customer_name: book.customer_name,
          date: book.date,
          start_time: book.start_time,
          end_time: book.end_time,
       
          
         
        };
      });
    
      res.status(200).json({ message: "Booked rooms successfully fetched", data: details });
    };
    
    export const getallcustomers = (req, res) => {
      const customers = bookedrooms.map((booking) => {
        const room = rooms.find((room) => room.room_id === booking.room_id);
        // console.log(room)
        return {
          customer_name: booking.customer_name,
          Room_name: room ? room.room_name : null,
          date: booking.date,
          start_time: booking.start_time,
          end_time: booking.end_time
        };
      });
    
      res.json(customers);
    };







    export const customercount = (req, res) => {
      const customerid = parseInt(req.params.id);
    
      const customerbookings = bookedrooms.filter((booking) => parseInt(booking.customer_id) === customerid);
    
      const bookingsinfo = customerbookings.map((booking) => {
        const room = rooms.find((room) => room.room_id === booking.room_id);
        return {
          customer_name: booking.customer_name,
          room_name: room ? room.room_name : null,
          date: booking.date,
          start_time: booking.start_time,
          end_time: booking.end_time,
          booking_id: booking.booking_id,
          booking_status: booking.status
        };
      });
    
      res.status(200).json({
        count: customerbookings.length,
        bookings: bookingsinfo
      });
    };
    

  