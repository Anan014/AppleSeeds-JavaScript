function boom(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 7 == 0) {
            if ((i + '').indexOf('7') > -1) {
                console.log("BOOM-BOOM");
            } else
                console.log("BOOM")
        } else
            console.log(i);
    }
}

boom(18);