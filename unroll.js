function unroll(squareArray) {
  let result = [];
  let rows = squareArray.length;
  let currentRow = 0;
  let currentIdx = 0;
  let iterations = 0;
  let running = true;

  const check = (array) => {
    const result = array.length === squareArray.length ** 2;
    return result ? (running = false) : running;
  };

  const leftToRight = (iteration) => {
    if (!running) return;
    currentRow = iteration;
    while (currentIdx < rows) {
      result.push(squareArray[currentRow][currentIdx + iteration]);
      currentIdx++;
    }
    rows--;
    check(result);
  };

  const topToBottom = (iteration) => {
    if (!running) return;
    currentRow++;
    currentIdx = squareArray.length - 1 - iteration;
    if (currentRow > rows) {
      result.push(squareArray[currentRow][currentIdx]);
    }
    while (currentRow <= rows) {
      result.push(squareArray[currentRow][currentIdx]);
      currentRow++;
    }
    check(result);
  };

  const rightToLeft = (iteration) => {
    if (!running) return;
    currentRow = currentIdx;
    currentIdx--;
    while (currentIdx >= 0 && currentIdx >= iteration) {
      result.push(squareArray[currentRow][currentIdx]);
      currentIdx--;
    }
    rows--;
    check(result);
  };

  const bottomToTop = () => {
    if (!running) return;
    currentIdx = 0;
    currentRow--;
    while (currentRow > 0) {
      result.push(squareArray[currentRow][currentIdx]);
      currentRow--;
    }
    check(result);
  };

  while (running) {
    leftToRight(iterations);
    topToBottom(iterations);
    rightToLeft(iterations);
    bottomToTop();
    iterations++;
  }

  return result;
}

module.exports = unroll;
