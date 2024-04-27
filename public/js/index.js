function upload() {
    const fileInput = document.getElementById('myFile');
    const uploadProgress = document.getElementById('uploadProgress');
    const statusText = document.getElementById('statusText');

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);
    
    const xhr = new XMLHttpRequest();
    
    xhr.open('POST', '/upload');
    
    xhr.upload.onprogress = function(event) {
        statusText.textContent = "Uploading...";
      if (event.lengthComputable) {
        const progress = (event.loaded / event.total) * 100;
        uploadProgress.value = progress;
      }
    };
    
    xhr.onload = function() {
        if (xhr.status === 200) {
          // Upload successful
          console.log('Upload complete');
          statusText.textContent = 'Upload complete';
        } else {
          // Error handling
          console.error('Upload failed with status:', xhr.status);
          statusText.textContent = 'Upload failed';
        }
      };
    
      xhr.onerror = function() {
        // Network error handling
        console.error('Network error occurred');
        statusText.textContent = 'Network error';
      };
    
    xhr.send(formData);
}