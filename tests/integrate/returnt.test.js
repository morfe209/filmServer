const request = require("supertest");
const { Rental } = require("../../models/rental");

// const { User } = require("../../models/user");

const mongoose = require("mongoose");

describe("api/returns", ()=> {
    let server;
    let customerId;
    let movieId;
    let rental;

    beforeEach(async () => {
      server = require("../../index");
      customerId = mongoose.Types.ObjectId().toHexString()
      movieId = mongoose.Types.ObjectId().toHexString()
      
      rental = new Rental({
          customer: {
              _id: customerId,
              name: "12345",
              phone: "12345"
          },
          movie: {
            _id: movieId,
            title: "12345",
            dailyRentalRate: 2
          }
      })
      await rental.save();
    });
    
    afterEach(async () => {
      server.close();
      await Rental.remove({});
    });

    it("simple test", async () =>{
       const result = await Rental.findById(rental._id)
       console.log(result)
       expect(result).not.toBeNull();
    })
})