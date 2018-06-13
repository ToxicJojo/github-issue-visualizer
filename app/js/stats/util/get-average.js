import getSum from './get-sum'

const getAverage = (numbers) => {
  const sum = getSum(numbers)
  return sum / numbers.length
}

export default getAverage