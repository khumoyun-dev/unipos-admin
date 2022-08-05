import BasketIcon from "../../assets/Svgs/BasketIcon";
import Box2Icon from "../../assets/Svgs/Box2Icon";
import NotesIcon from "../../assets/Svgs/NotesIcon";
import AtmIcon from "../../assets/Svgs/AtmIcon";
import PersonIcon from "../../assets/Svgs/PersonIcon";

function random() {
    return Math.floor(Math.random() * (0, 100) + 2);
}

const item = [
    {
        id: random(),
        icon: <Box2Icon />,
        number: 3256001,
        title: "Umumiy mahsulotlar",
        color: "#4B7BD8",
    },
    {
        id: random(),
        icon: <BasketIcon />,
        number: 485098,
        title: "Haftalik sotilgan mahsulotlar",
        color: "#44AB7F",
    },
    {
        id: random(),
        icon: <NotesIcon />,
        number: 258624500.00,
        title: "Xaftalik sotilgan mahsulotlarning summas",
        color: "#5A28C5",
    },
    {
        id: random(),
        icon: <PersonIcon />,
        number: 25,
        title: "Foydalanuvchilar",
        color: "#DEA000",
    },
    {
        id: random(),
        icon: <AtmIcon />,
        number: 2580,
        title: "Xaftalik checklar soni",
        color: "#B828C5",
    },
    {
        id: random(),
        icon: <Box2Icon />,
        number: 15,
        title: "Qaytarilgan tovarlar",
        color: "#B70F55",
    },
]

export default item;