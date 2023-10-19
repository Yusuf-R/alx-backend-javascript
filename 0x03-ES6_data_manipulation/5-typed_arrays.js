// Create a function named createInt8TypedArray that
// returns a new ArrayBuffer with an Int8 value at a specific position.

// It should accept three arguments: length (Number), position (Number), and value (Number).

// If adding the value is not possible the error Position outside
// the range should be thrown.

export default function createInt8TypedArray(length, position, value) {
  if (!Number.isInteger(length) || !Number.isInteger(position) || !Number.isInteger(value)) {
    throw new Error('Arguments must be integers');
  }
  if (position < 0 || position > length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);
  dataView.setInt8(position, value);
  return dataView;
}
