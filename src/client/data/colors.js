const color1 = "#FF6384"
const color2 = "#36A2EB"
const color3 = "#FFCE56"
const color4 = "rgba(75,192,192,1)"

export const colors = {
  awake: color1,
  light: color2,
  deep: color3,
  out: color4,
}

export const colorArray = [
  {
    type: 'awake',
    label: 'Awake',
    hex: color1
  },
  {
    type: 'light',
    label: 'Light Sleep',
    hex: color2
  },
  {
    type: 'deep',
    label: 'Deep Sleep',
    hex: color3
  },
  {
    type: 'out',
    label: 'Out of Bed',
    hex: color4
  }
]

export default { colors, colorArray }