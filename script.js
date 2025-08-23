document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('rsvpMessage').textContent = 'Thank you for your RSVP!';
    this.reset();
});
