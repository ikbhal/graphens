const fs = require('fs');

// The graph data will be stored in a simple JSON format.
let graphData = {
  nodes: [],
  relationships: []
};

// Add a node with the given name.
function addNode(nodeName) {
  graphData.nodes.push({ name: nodeName });
}

// Get all nodes.
function getNodes() {
  return graphData.nodes;
}

// Add a relationship between nodes with the given names.
function addRelationship(fromNodeName, toNodeName) {
  const fromNode = getNodeByName(fromNodeName);
  const toNode = getNodeByName(toNodeName);

  if (!fromNode || !toNode) {
    console.log('Error: One or both of the nodes not found.');
    return;
  }

  graphData.relationships.push({
    from: fromNodeName,
    to: toNodeName
  });
}

// Helper function to find a node by its name.
function getNodeByName(nodeName) {
  return graphData.nodes.find((node) => node.name === nodeName);
}

// Get all relationships.
function getRelationships() {
  return graphData.relationships;
}

// Get relationships from a specific node.
function getRelationshipsFromNode(nodeName) {
  const node = getNodeByName(nodeName);
  if (!node) {
    console.log('Error: Node not found.');
    return [];
  }

  const relationshipsFromNode = graphData.relationships.filter(
    (rel) => rel.from === nodeName
  );

  return relationshipsFromNode;
}

// Check if a node exists.
function nodeExists(nodeName) {
  return getNodeByName(nodeName) !== undefined;
}

// Check if a relationship exists between two nodes.
function relationshipExists(fromNodeName, toNodeName) {
  return graphData.relationships.some(
    (rel) => rel.from === fromNodeName && rel.to === toNodeName
  );
}

// Save the graph data to a local file.
function saveToFile(filePath) {
  const dataToSave = JSON.stringify(graphData, null, 2);
  fs.writeFileSync(filePath, dataToSave);
}

module.exports = {
  addNode,
  getNodes,
  addRelationship,
  getRelationships,
  getRelationshipsFromNode,
  nodeExists,
  relationshipExists,
  saveToFile
};
