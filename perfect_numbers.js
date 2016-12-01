function perfectNumber(number) {
    let sum = 0;
    let halved = number / 2; // halved the number to increase performance
    let result = false;

    for (i = 1; i <= halved; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    if (sum === number) {
        result = true;
    } else {
        result = false;
    }

    return result;
}
