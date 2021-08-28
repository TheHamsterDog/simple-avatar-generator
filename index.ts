const avatarGenerator = (name) => {
  const colors = ["#139181",
    "#56003D",
    "#9EADC8",
    "#EA8A1F",
    "#167498",
    "#000002",
    "#FF5A2B",
    "#2B5564",
    "#210A2D",
    "#083DB7"
  ]
  const svg = `<svg width="200" xmlns="http://www.w3.org/2000/svg" height="200">
    <circle cx="50" cy="50" r="40" stroke="green" stroke-width="0" fill="${colors[Math.floor(Math.random()*colors.length)]}"> </circle>
    <text x="50" y="55" font-size="40px" fill="white" font-family="sans-serif" text-anchor="middle" alignment-baseline="middle">${name[0].toUpperCase()}</text>
  </svg>`
  return "data:image/svg+xml," + encodeURIComponent(svg);
}

export default avatarGenerator;
module.exports = avatarGenerator;