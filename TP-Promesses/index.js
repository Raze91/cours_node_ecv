function string20(string) {
    return new Promise((resolve, failure) => {
        if (string.length > 20) {
            failure("String trop longue");
        }
        resolve(true);
    })
}

function intPromise(a, b) {
    return new Promise((resolve, failure) => {
        if (a > b) {
            const diff = a - b;
            resolve(diff);
        }
        failure("Echec de la promesse")
    })
}

function datePromise(dateParam) {
    return new Promise((resolve, failure) => {
        const date = new Date(dateParam);
        const ageDiff = Date.now() - date.getTime();
        const ageDate = new Date(ageDiff); // miliseconds from epoch
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);

        if (age > 18) {
            resolve(true);
        }
        failure("Personne mineure");
    })
}

async function execute() {
    try {
        const promiseString = await string20("sdfdsf");
        const promiseInt = await intPromise(50, 10);
        const promiseDate = await datePromise("1999/08/17");
        console.log(promiseString);
        console.log(promiseInt)
        console.log(promiseDate)
    } catch (e) {
        console.log(e);
    }
}

function thenExecute() {
    string20("helloworld")
        .then(res => console.log(res))
        .catch(error => console.error(error));

    intPromise(50, 10)
        .then(res => console.log(res))
        .catch(error => console.log(error));

    datePromise("1999/08/17")
        .then(res => console.log(res))
        .catch(error => console.error(error));
}

// execute();
thenExecute();