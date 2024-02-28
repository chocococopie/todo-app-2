const Double = x => {
    const num = Number(x);
    return isNaN(num) ? 0 : num * 2;
}

export default Double