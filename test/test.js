const roomService = require('_services/rooms.services')
const describe = require('mocha').describe
const it = require('mocha').it

describe('Hotel Reservation', function () {
  it('#arrivals = [1, 3, 5] ; departures = [2, 6, 10]; roomAvail = 1', function (done) {
    const arrivals = [1, 3, 5]
    const departures = [2, 6, 10]
    const roomAvail = 1
    const result = roomService.checkRoomAvailable(arrivals, departures, roomAvail)
    // show result
    console.log(result)
    if (!result[2]) {
      done()
    }
  })

  it('#arrivals = [7, 9, 11, 13] ; departures = [10, 11, 15]; roomAvail = 1', function (done) {
    const arrivals = [7, 9, 11, 13]
    const departures = [10, 11, 15]
    const roomAvail = 1
    const result = roomService.checkRoomAvailable(arrivals, departures, roomAvail)
    // show result
    console.log(result)
    if (!result[1] && !result[3]) {
      done()
    }
  })
})
