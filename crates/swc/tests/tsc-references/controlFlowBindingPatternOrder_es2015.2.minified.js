{
    let a = 0, [{ [a = 1]: b  } = [
        9,
        a
    ]] = [];
}{
    let a1 = 1, [{ [a1]: b1  } = [
        9,
        a1 = 0
    ]] = [];
}{
    let a2 = 0, [{ [a2 = 1]: b2  } = [
        9,
        a2
    ]] = [
        [
            9,
            8
        ]
    ];
}{
    let a3 = 1, [{ [a3]: b3  } = [
        a3 = 0,
        9
    ]] = [
        [
            8,
            9
        ]
    ];
}
