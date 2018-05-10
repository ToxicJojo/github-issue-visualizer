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