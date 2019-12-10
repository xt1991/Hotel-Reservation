exports.checkRoomAvailable = (arrivalDate, departureDate, roomAvail) => {
  let result = true

  result = arrivalDate.map((prop, index) => {
    // remove first booking
    if (index > 0) {
      if (departureDate[index - 1] > prop) {
        return roomAvail >= 2 ? 1 : 0
      }
    }
    return 1
  })

  return result
}
