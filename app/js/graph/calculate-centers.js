// Takes a number n and calculates n x/y coordinates along a circle such
// that they are equally spaced from each other
const caluculateCenters = (n) => {
  const centers = []

  for (let i = 0; i < n; i++) {
    const radiant =  (2 * Math.PI / n) * i
    const x = Math.cos(radiant)
    const y = Math.sin(radiant)

    centers[i] = {
      x,
      y
    }
  }

  return centers
}

export default caluculateCenters