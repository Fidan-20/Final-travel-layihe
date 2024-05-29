document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
   
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
  
    
    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields');
      return; 
    }
  
   
    alert('Message sent successfully:\n\nName: ' + name + '\nEmail: ' + email + '\nSubject: ' + subject + '\nMessage: ' + message);
  });
  