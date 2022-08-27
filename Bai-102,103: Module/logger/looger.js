import { TYPE_LOG } from '../constants';

function logger(log, type = TYPE_LOG) {
    console.type(log);
}

export default logger;