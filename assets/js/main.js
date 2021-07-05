// open modal
function openModal() {
    var openModal = document.querySelector('.create-btn');
    var modal = document.querySelector('.modal');
    modal.classList.add('modal-active');
}

// close modal
function closeModal() {
    var closeModal = document.querySelector('.close-modal')
    var modal = document.querySelector('.modal');
    modal.classList.remove('modal-active')
    
}


var listApps = [];

// show curently app
function displayAll() {
    var dataListApps = document.querySelector('.container-apps');
    dataListApps.innerHTML = '';
    for(i = 0; i < listApps.length; i++ ) {
        var listApp = listApps[i];
        dataListApps.innerHTML += '<div class="square-apps">' +
                                  '<h1>'+ listApp.name + '</h1>' +
                                  '<p>' + listApp.time + '</p>' +
                                  '<div class="delete-btn">' +
                                  '<i class="fas fa-times" onclick="onDeleteApp('+ i +')"></i>' +
                                  '</div></div>'
    }
    dataListApps.innerHTML += '<div class="create-btn">' +
                              '<i class="fas fa-plus" onclick="openModal()"></i>' +
                              '</div>'
}

// create new Square Apps 
function onCreateApp() {
    var firstChar = document.querySelector("#name").value;
    var lastChar = document.querySelector('#seclect').value;
    var fullChar = firstChar.slice(0, 1) + lastChar.slice(0, 1);
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var listApp = {
        name: fullChar,
        time: time
    }

    listApps.push(listApp);

    displayAll();
}


// delete app
function onDeleteApp(index) {
    if(confirm("Are you sure")) {
        deleteApp(index);
        displayAll();
    }
}

function deleteApp(index) {
    listApps.splice(index, 1);
}