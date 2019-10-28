const roomService = require('_services/rooms.services')

// input
const arrivals = [1, 3, 5]
const departures = [2, 6, 10]
const K = 1

// check avaliable
const result = roomService.checkRoomAvailable(arrivals, departures, K)

// show result
console.log(result)
