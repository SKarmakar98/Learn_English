function showDangerToast() {
    var toastContainer = document.getElementById('toast-container');

    // Create danger toast element
    var toast = document.createElement('div');
    toast.className = 'toast toast-danger';
    toast.innerText = 'This is a danger toast message';

    // Append toast to container
    toastContainer.appendChild(toast);

    // Trigger layout reflow to enable transition
    toast.offsetHeight;

    // Show toast
    toast.style.opacity = 1;

    // Hide toast after a delay (e.g., 3 seconds)
    setTimeout(function() {
        toast.style.opacity = 0;
        // Remove toast from the DOM after transition
        setTimeout(function() {
            toastContainer.removeChild(toast);
        }, 300);
    }, 3000);
}
