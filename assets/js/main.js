// Tampilkan menu
const navMenu = document.getElementById('nav-menu')
      navToggle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close')

// membuka menu ketika klik humberger
if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}

// menutup menu ketika pencet close
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}


// hilangkan menu mobile
const navLink = document.querySelectorAll('nav_link')

const LinkAction =() =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu,classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',LinkAction))


// change blur header
const blurHeader = () =>{
    const header = document.getElementById('headers')
    console.log(header.classList)
    this.scrollY >= 50 ? header.classList.add('blur-Header')
                       : header.classList.remove('blur-header')
}

window.addEventListener('scroll',blurHeader)


//show scroll up
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)


//SCROLL SECTIONS ACTIVE LINK*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


// validation

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let age = document.getElementById('age').value.trim();
    let gender = document.getElementById('gender').value;

    let isValid = true;

    // Validation for Name
    if (!name) {
        document.getElementById('nameError').innerText = 'Name is required.';
        isValid = false;
    } else {
        document.getElementById('nameError').innerText = '';
    }

    // Validation for Email
    if (!email) {
        document.getElementById('emailError').innerText = 'Email is required.';
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        isValid = false;
    } else {
        document.getElementById('emailError').innerText = '';
    }

    // Validation for Password
    if (!password) {
        document.getElementById('passwordError').innerText = 'Password is required.';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Password must be at least 6 characters long.';
        isValid = false;
    } else {
        document.getElementById('passwordError').innerText = '';
    }

    // Validation for Age
    if (!age) {
        document.getElementById('ageError').innerText = 'Age is required.';
        isValid = false;
    } else if (isNaN(age) || age <= 0) {
        document.getElementById('ageError').innerText = 'Please enter a valid age.';
        isValid = false;
    } else {
        document.getElementById('ageError').innerText = '';
    }

    // Validation for Gender
    if (!gender) {
        document.getElementById('genderError').innerText = 'Gender is required.';
        isValid = false;
    } else {
        document.getElementById('genderError').innerText = '';
    }

    if (isValid) {
        alert('Registration successful!');
        window.location.href = 'index.html'; 
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}


