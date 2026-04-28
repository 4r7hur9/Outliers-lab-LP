// Mock para @tsparticles/* e tsparticles (pacotes ESM incompatíveis com ts-jest)
const React = require("react");

const Particles = () =>
  React.createElement("div", { "data-testid": "particles-bg" });
Particles.displayName = "Particles";

module.exports = Particles;
module.exports.default = Particles;
module.exports.initParticlesEngine = () => Promise.resolve();
module.exports.loadSlim = () => Promise.resolve();
module.exports.loadFull = () => Promise.resolve();
