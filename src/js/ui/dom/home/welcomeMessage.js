import { REGISTER_PAGE } from '../../../utilities/pagePaths';

const targetH1 = document.getElementById('welcomeUser');
const storedUserData = localStorage.getItem('userData');

const targetParagraph = document.getElementById('signUpMessage');
const targetButton = document.getElementById('becomeUserButton');

export function welcomeUser() {
  if (storedUserData) {
    const user = JSON.parse(storedUserData);
    const userName = user.name;

    targetH1.textContent = `Welcome back ${userName}`;
    targetParagraph.style.display = 'none';
    targetButton.style.display = 'none';
  } else {
    targetH1.textContent = `Welcome to BidMe`;

    targetParagraph.textContent =
      'Sign up to to start bidding and place your BidMe’s';
    targetParagraph.style.display = 'block';

    targetButton.textContent = 'Become a BidMe user';
    targetButton.style.display = 'block';
    targetButton.addEventListener(
      'click',
      () => (window.location.href = REGISTER_PAGE)
    );
  }
}

targetH1.classList.add(
  'text-2xl',
  'md:text-3xl',
  'lg:text-5xl',
  'font-poppins',
  'font-bold',
  'text-center',
  'tracking-widest',
  'lg:pb-5'
);
targetParagraph.classList.add(
  'text-sm',
  'md:text-xl',
  'lg:text-[32px]',
  'text-center',
  'lg:pb-5'
);
targetButton.classList.add('button');
