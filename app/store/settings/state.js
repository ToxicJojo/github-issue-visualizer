const state = {
  refresh: true,
  filters: [],
  splitter: {
    method: null,
    args: [],
  },
  display: {
    color: {
      default: 'black',
      method: null,
      params: null,
    },
    radius: {
      default: 10,
      method: null,
      params: null,
    }
  },
  markedIssues: [],
}

export default state