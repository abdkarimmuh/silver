export const textAlphaNumeric = (value) => {
  return value.replace(/[^a-zA-Z0-9,. ]/g, '').toUpperCase()
}

export const textAlphaNumericWithoutSpace = (value) => {
  return value.replace(/[^a-zA-Z0-9,. ]/g, '').toUpperCase()
}

export const textNumeric = (value) => {
  return value.replace(/[^0-9]/g, '')
}

export const textAlphabet = (value) => {
  return value.replace(/[^a-zA-Z,. ]/g, '').toUpperCase()
}

export const camelToSnake = (value) => {
  return value.replace(/[\w]([A-Z])/g, (m) => `${m[0]}_${m[1]}`).toLowerCase()
}

export const firstLetterUpperCase = (value) => {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export const firstWordUppercase = (value) => {
  if (!value) return value
  const words = value.split(/[\s_-]+/)
  return words
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(' ')
}

// https://jsfiddle.net/MadLittleMods/n0n2euwc/ with edit
const chunkString = function (str, size) {
  const spacePieces = str.split(' ')
  return spacePieces.reduce(
    (chunks, piece, index) => {
      const isFirstPiece = index === 0

      const chunkSeparator = isFirstPiece ? '' : ' '
      let currentChunk = chunks[chunks.length - 1]
      // If a piece is simply too long, split it up harshly
      if (piece.length > size) {
        // Add whatever we can to the current
        const startingPieceIndex = size - (chunkSeparator + currentChunk).length
        currentChunk += chunkSeparator + piece.substring(0, startingPieceIndex)
        chunks[chunks.length - 1] = currentChunk

        // Then just add the rest to more chunks
        const leftover = piece.substring(startingPieceIndex)
        for (let i = 0; i < leftover.length; i += size) {
          chunks.push(leftover.substring(i, i + size))
        }
      }
      // Otherwise try to split nicely at spaces
      else if ((currentChunk + chunkSeparator + piece).length <= size) {
        currentChunk += chunkSeparator + piece
        chunks[chunks.length - 1] = currentChunk
      }
      // If we simply reached max for this chunk, move to the next one
      else {
        currentChunk = piece
        chunks.push('')
        chunks[chunks.length - 1] = currentChunk
      }

      return chunks
    },
    ['']
  )
}

export const splitString = (str, maxLength = 200) => chunkString(str, maxLength)
export const cutString = (str, maxLength = 200) =>
  chunkString(str, maxLength)[0]
