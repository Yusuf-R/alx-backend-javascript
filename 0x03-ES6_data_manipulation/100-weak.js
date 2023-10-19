// Export a const instance of WeakMap and name it weakMap.

// Export a new function named queryAPI. It should accept an endpoint argument like so:

// {
//   protocol: 'http',
//   name: 'getUsers',
// }

const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  const count = weakMap.get(endpoint);
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
  return count;
}
export { weakMap, queryAPI };
