function logger(log) {
    if (typeof log === 'undefined') {
        log = 'Gia tri mac dinh!';
    }
    console.log(log);
}

logger(undefined);

function logger(log, isAlert) {
    if (isAlert) return alert(log);
    console.log(log);
}

logger('Message...');