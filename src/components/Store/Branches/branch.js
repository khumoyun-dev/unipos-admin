function random() {
    return Math.floor(Math.random() * 1000 + 7);
}

const branches = {
    id: random(),
    branchName: "M. Ulug'bek",
    branchImg: "./src/assets/images/BranchImg.jpg",
    date: "12 Mart 2020",
    time: "12:01",
    all_products: "1256364",
    weekly_products: "258624"
}

export default branches;