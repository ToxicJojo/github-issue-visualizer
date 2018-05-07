const createGroup = (name, issues) => {
  const group = {
    meta: {
      name,
    },
    issues,
  }

  return group
}

export default createGroup