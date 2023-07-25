const { expect } = require('chai');
const graphpens = require('./graphpens');

describe('graphpens', () => {
  // Run this before each test case to reset the graph data.
  beforeEach(() => {
    graphpens.addNode('Node A');
    graphpens.addNode('Node B');
    graphpens.addNode('Node C');
    graphpens.addRelationship('Node A', 'Node B');
    graphpens.addRelationship('Node B', 'Node C');
  });

  it('should add nodes', () => {
    expect(graphpens.getNodes()).to.have.lengthOf(3);
    graphpens.addNode('Node D');
    expect(graphpens.getNodes()).to.have.lengthOf(4);
  });

  // it('should add relationships between nodes', () => {
  //   expect(graphpens.getRelationships()).to.have.lengthOf(2);
  //   graphpens.addRelationship('Node C', 'Node A');
  //   expect(graphpens.getRelationships()).to.have.lengthOf(3);
  // });

  // it('should get relationships from a specific node', () => {
  //   const relationshipsFromNodeB = graphpens.getRelationshipsFromNode('Node B');
  //   expect(relationshipsFromNodeB).to.have.lengthOf(2);
  //   expect(relationshipsFromNodeB).to.deep.include.members([
  //     { from: 'Node B', to: 'Node A' },
  //     { from: 'Node B', to: 'Node C' }
  //   ]);

  //   const relationshipsFromNodeA = graphpens.getRelationshipsFromNode('Node A');
  //   expect(relationshipsFromNodeA).to.have.lengthOf(1);
  //   expect(relationshipsFromNodeA[0].to).to.equal('Node B');
  // });

  // it('should check if nodes exist', () => {
  //   expect(graphpens.nodeExists('Node A')).to.be.true;
  //   expect(graphpens.nodeExists('Node D')).to.be.false;
  // });

  // it('should check if relationships exist between nodes', () => {
  //   expect(graphpens.relationshipExists('Node A', 'Node B')).to.be.true;
  //   expect(graphpens.relationshipExists('Node B', 'Node A')).to.be.false;
  // });
});
