document.getElementById('toggleFormButton').addEventListener('click', function() {
    const form = document.getElementById('contactForm');
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
});

document.getElementById('activityButton').onclick = function() {
    document.getElementById('mediaContainer').style.display = 'block';
};

document.getElementById('photoButton').onclick = function() {
    document.getElementById('outputContainer').innerHTML = '<h3>Here is a Photo:</h3><img src="your-photo-url.jpg" alt="Photo">';
};

document.getElementById('videoButton').onclick = function() {
    document.getElementById('outputContainer').innerHTML = '<h3>Here is a Video:</h3><video controls><source src="your-video-url.mp4" type="video/mp4">Your browser does not support the video tag.</video>';
};

