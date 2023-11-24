// create a module name Utils
// create a property calculateNumber on the module Utils

// Define the Utils module
const Utils = {
  // Define the calculateNumber property
  calculateNumber: (type, a, b) => {
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    }
    if (type === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    }
    if (type === 'DIVIDE') {
      if (Math.round(b) === 0) {
        return 'Error';
      }
      return Math.round(a) / Math.round(b);
    }
    return null;
  },
};
// Export the Utils module
module.exports = Utils;
