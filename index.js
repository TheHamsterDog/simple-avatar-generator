const avatarGenerator = (name) => {
    const svg = `<svg width="200" xmlns="http://www.w3.org/2000/svg" height="200">
    <circle cx="50" cy="50" r="40" stroke="green" stroke-width="0" fill="#083DB7"> </circle>
    <text x="36" y="62" font-size="40px" fill="white" font-family="sans-serif">${name[0]}</text>
  </svg>`
    return "data:image/svg+xml," + encodeURIComponent(svg);
}

export default avatarGenerator;
module.exports = avatarGenerator;