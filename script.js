$(document).ready(onReady);

function onReady(){
    $('#redOne').on('click', addRed);
    $('#blueOne').on('click', addBlue);
    $('#greenOne').on('click', addGreen);
    $('#yellowOne').on('click', addYellow); 
    $('#redButton').on('click', multiRed)
    $('#blueButton').on('click', multiBlue)
    $('#greenButton').on('click', multiGreen)
    $('#yellowButton').on('click', multiYellow)
}

console.log('yo')


function addRed(){
    console.log('add');
    let el = $(".container");
el.append(`<div class="block red"></div>`);
}//end add one red


function addBlue() {
    console.log('add');
    let el = $(".container");
    el.append(`<div class="block blue"></div>`);
}//end add one blue

function addGreen() {
        console.log('add');
        let el = $(".container");
        el.append(`<div class="block green"></div>`);
}// end add one green

function addYellow() {
            console.log('add');
            let el = $(".container");
            el.append(`<div class="block yellow"></div>`);
        }//end add one yellow


function multiRed(){
    let input = $('redIn').val()
    addRed()

}//end multiRed