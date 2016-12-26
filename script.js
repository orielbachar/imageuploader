//Ties our uploader to our cloud name
 cloudinary.setCloudName('dwyltlptx');


 //creates widget frame on button click, sends selected images to Cloudinary storage and back
  cloudinary.applyUploadWidget(document.getElementById('image-uploader'),
  { upload_preset: 'icljszja'},
  function(error, result) {
    console.log(result);
    //the 'result' perameter is the returned image back from Cloudinary that you uploaded.
    //Send this 'result' anywhere in your project you would like to send it!
    $('#paste-here').append(result)
  });
