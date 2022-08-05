function mask(n) {
    let x = n.replace(/\D+/g, '')
        .replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '$1$2$3$4$5');
    return x;
}

export { mask }