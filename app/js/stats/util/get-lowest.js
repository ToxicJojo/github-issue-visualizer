const getLowest = (numbers) => {
  return numbers.reduce((lowest, number) => {
    if (lowest > number) {
      return number
    }
    return lowest
  }, numbers[0])
}

export default getLowest