// Module definition
const walker = (input, position, iterator) => {

  //
  const { from, to } = position
  const { index, adjust } = iterator

  //
  const length = input[index].length

  //
  if (from - adjust >= length) {

    return walker(input, position, {
      index: index + 1,
      adjust: adjust + length
    })

  } else {

    // Matched
    return { input, position, iterator }

  }

}

// Exporter
export default walker
