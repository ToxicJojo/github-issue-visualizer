const radiusAge = (issue) => {
  return   - Math.floor((new Date().getTime() - new Date(issue.created_at).getTime()) / (1000 * 60 * 60 * 24));
}

export default radiusAge