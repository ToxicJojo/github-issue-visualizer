import * as d3 from 'd3'
import { forceCluster } from 'd3-force-cluster'

import calculateCenters from './calculate-centers'

const openClosedColor = (d) => {
  if (d.state === 'open') {
    return 'blue'
  }
  return 'red'
}

const simulation = d3.forceSimulation()
let centers = []

const init = (nodes, update) => {
  const width = 800
  const height = 800

  const svg = d3.select('svg')

  nodes.map((node) => {
    node.radius = 5
    return node
  })

  simulation
    .nodes(nodes)
    .force('charge', d3.forceManyBody().strength(.5))
    .force('collision', d3.forceCollide().radius(6).strength(1).iterations(1.5))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('cluster', forceCluster()
      .centers(function (d) { return centers[d.cluster] })
      .strength(.4)
      .centerInertia(1))

  const ticked = () => {
    update()
  }

  simulation.on('tick', ticked) 
  simulation
    .alpha(1)
    .restart()

}

const updateNodes = (nodes) => {
  simulation.nodes(nodes)
  simulation
    .alphaTarget(.3)
    //.alpha(.2)
    //.alpha(1)
    //.restart()
    //.restart()
    //.alpha(.1)
}

const updateClusters = (count) => {
  centers = calculateCenters(2)
  centers = centers.map((center) => {
    center.x *= 150
    center.y *= 150

    return center
  })
}


export default {
  init,
  updateNodes,
  updateClusters,
}
