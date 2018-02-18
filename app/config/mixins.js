export const mixins = {
  sectionHeading: {

  },
  text: (color = '#000', fontSize = 16, fontWeight = 'normal', textAlign = 'center') => {
    return {
      color,
      fontSize,
      fontWeight,
      textAlign
    }
  },
  center: (flexDirection = 'column') => {
    return {
      flexDirection,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
}
