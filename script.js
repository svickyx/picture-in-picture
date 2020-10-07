const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select a media stream, pass to video element and play it
async function selectMediaStream () {
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        // here is where the user can select which window/screen they want to share
        videoElement.srcObject = mediaStream;
        // and then pass that media stream to video as its src object
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
        // when the video has loaded its meta data, it will call a function to play the video
    } catch(error) {
        console.log('error', error);
    }
}

button.addEventListener('click', async ()=> {
    // button disabled if picinpic is not working
    button.disabled = true;
    // start pic in pic
    await videoElement.requestPictureInPicture();
    // reset button, wait until the video element to start pic in pic, then the button is able to work
    button.disabled = false;
})

//Get load
selectMediaStream();