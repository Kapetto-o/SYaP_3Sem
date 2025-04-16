document.getElementById('validateForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;
  
    document.querySelectorAll('.error-message').forEach(element => element.textContent = '');
    document.querySelectorAll('input, textarea, select').forEach(element => element.classList.remove('error'));
  
    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ-]{1,20}$/;
    const emailRegex = /^\S+@[A-Za-z]{2,5}\.[A-Za-z]{2,3}$/;
    const phoneRegex = /^\(0\d{2}\)\d{3}-\d{2}-\d{2}$/;
  
    const surname = document.getElementById('surname');
    if (!nameRegex.test(surname.value)) {
      isValid = false;
      surname.classList.add('error');
      document.getElementById('surname-error').textContent = 'Фамилия должна содержать только буквы или дефис (1-20 символов).';
    }
  
    const name = document.getElementById('name');
    if (!nameRegex.test(name.value)) {
      isValid = false;
      name.classList.add('error');
      document.getElementById('name-error').textContent = 'Имя должно содержать только буквы или дефис (1-20 символов).';
    }
  
    const email = document.getElementById('email');
    if (!emailRegex.test(email.value)) {
      isValid = false;
      email.classList.add('error');
      document.getElementById('email-error').textContent = 'Введите корректный Email в формате example@mail.com.';
    }
  
    const phone = document.getElementById('phone');
    if (!phoneRegex.test(phone.value)) {
      isValid = false;
      phone.classList.add('error');
      document.getElementById('phone-error').textContent = 'Телефон должен быть в формате (0XX)XXX-XX-XX.';
    }
  
    const about = document.getElementById('about');
    const aboutTrimmed = about.value.trim();
    if (aboutTrimmed.length === 0 || aboutTrimmed.length > 250) {
      isValid = false;
      about.classList.add('error');
      document.getElementById('about-error').textContent = 'Поле не должно быть пустым и не превышать 250 символов.';
    }
  
    if (!isValid) return;
  
    const city = document.getElementById('city');
    const course = document.querySelector('input[name="course"]:checked');
    const university = document.getElementById('university');
  
    if (city.value !== 'Минск' || !course || course.value !== '3' || !university.checked) {
      if (!confirm('Вы уверены, что правильно ответили на вопросы?')) {
        return;
      }
    }
  
    alert('Форма отправлена успешно!');
});