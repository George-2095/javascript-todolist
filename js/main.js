document.querySelector('#submitbutton').addEventListener("click", () => {
    const iteminput = document.querySelector('#iteminput')
    const itemerror = document.querySelector("#itemerror")
    if (iteminput.value === '') {
        itemerror.innerHTML = `<b class="text-danger">Fill in this field is required</b>`
    } else {
        itemerror.innerHTML = ``
        document.querySelector('#list').innerHTML += `
            <li class="item">
                <span id="taskname">
                    ${iteminput.value}
                </span>
                <button id="delete" class="btn btn-danger">Delete</button>
            </li>
        `
        iteminput.value = ''
        var deletebutton = document.querySelectorAll("#delete");
        for (var i = 0; i < deletebutton.length; i++) {
            const element = deletebutton[i]
            element.addEventListener("click", (e) => {
                e.target.parentNode.remove()
            })
        }
    }
})