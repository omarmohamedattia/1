function BackgroundColor(color) {
    document.body.style.backgroundColor = color;
}
function addToOutput(value){
    document.getElementsByClassName ("output") [0].value += value
}

// Define function to change theme and image
function changeTheme(color) {
    document.body.style.backgroundColor = color;
    var image = document.getElementById('themeImage');
    image.src = "https://www.bing.com/images/search?view=detailV2&ccid=ty7x60Xq&id=8B7978D7F8FD6AF52D7C4F4A8DBEEB712FA9F080&thid=OIP.ty7x60XqUcpwSZHYkB5mNgHaE7&mediaurl=https%3a%2f%2fchronicpainblog.com%2fwp-content%2fuploads%2f2014%2f09%2fkid.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.b72ef1eb45ea51ca704991d8901e6636%3frik%3dgPCpL3Hrvo1KTw%26pid%3dImgRaw%26r%3d0&exph=1131&expw=1698&q=kid&simid=607987960457663983&FORM=IRPRST&ck=491D18C2E665ECB850D546AA8E0FB9BE&selectedIndex=0&itb=0";
}

// Define function to add clicked button value to the output field
function addToOutput(value) {
    var outputField = document.querySelector('.output');
    outputField.value += value;
}
