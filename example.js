const graphpens = require('./graphpens');

// Add some nodes and relationships
graphpens.addNode('Node A');
graphpens.addNode('Node B');
graphpens.addNode('Node C');
graphpens.addRelationship('Node A', 'Node B');
graphpens.addRelationship('Node B', 'Node C');

// Get all relationships and display them
console.log('All Relationships:');
console.log(graphpens.getRelationships());

// Get relationships from Node B
console.log('Relationships from Node B:');
console.log(graphpens.getRelationshipsFromNode('Node B'));

// Check if nodes and relationships exist
console.log('Node A exists:', graphpens.nodeExists('Node A'));
console.log('Node D exists:', graphpens.nodeExists('Node D'));
console.log('Relationship between Node A and Node B exists:', graphpens.relationshipExists('Node A', 'Node B'));
console.log('Relationship between Node A and Node C exists:', graphpens.relationshipExists('Node A', 'Node C'));

// Save the graph data to a local file
graphpens.saveToFile('graph_data.json');
