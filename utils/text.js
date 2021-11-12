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
