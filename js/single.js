const base = JSON.parse(localStorage.getItem('singleUser'))
const container = document.querySelector('.centerBlock')
const title = document.querySelector('.title')
const temp = base.map(({name , image, day, job, address}) =>{
    container.innerHTML = `
    <div class="card">
            <div class="card-image">
                <img src="${image}" class="singleImage">
            </div>
            <div class="card-body">
                <h2 class="Name">
                    Name:${name}
                </h2>
                <h2 class="birthday">
                    Birthday:${day}
                </h2>
                <h2 class="job">
                    Job:${job}
                </h2>
                <h2 class="address">
                    Address:${address}
                </h2>
            </div>
        </div>`

        title.innerHTML = name
})