function random() {
    return Math.floor(Math.random() * (0, 100) + 8.25);
}

const item = {
    id: random(),
    img: "https://www.apple.com/v/apple-watch-se/h/images/overview/music/music__bexc5op9pktu_small.jpg",
    rank: "1",
    model: "Smart watch series 7",
    description: "Aqlli soat"
}

export default item;