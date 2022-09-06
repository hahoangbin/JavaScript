import html from '../core.js'

function TodoItem({todo}) {
    return html `
        <li class="${todo.completer && 'completed'}">
            <div class="view">
                    <input class="toggle" 
                    type="checkbox" 
                    ${todo.completer && 'checked'}
                    onchange="dispatch('toggle)"
                >
                <label>${todo.titile}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="${todo.titile}">
        </li>
    `
}

export default TodoItem