document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const city = document.getElementById('city').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    formMessage.textContent = '';


    if (firstName === '' || lastName === '' || email === '' || password === '' || dob === '' || city === '' || message === '') {
      formMessage.textContent = 'All fields are required.';
      formMessage.style.color = 'red';
      return;
    }

   
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      formMessage.textContent = 'Please enter a valid email address.';
      formMessage.style.color = 'red';
      return;
    }

    formMessage.textContent = 'Message sent successfully!';
    formMessage.style.color = 'green';

  });