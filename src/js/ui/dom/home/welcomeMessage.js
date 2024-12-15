import {
  NEW_LISTING_PAGE,
  PROFILE_PAGE,
  REGISTER_PAGE,
} from '../../../utilities/pagePaths';
import { createHtmlElement } from '../createElement';

const storedUserData = localStorage.getItem('userData');

const targetH1 = document.getElementById('headingMessage');
const targetParagraph = document.getElementById('paragraphMessage');
const targetButton = document.getElementById('becomeUserButton');
const targetLoginLink = document.getElementById('loginLink');
const avatarContainer = document.getElementById('avatarContainer');
const avatar = document.getElementById('avatarWelcome');

export function welcomeUser() {
  if (storedUserData) {
    const user = JSON.parse(storedUserData);
    const userName = user.name;

    targetH1.textContent = `Welcome back ${userName}`;
    avatarContainer.style.display = 'block';
    targetParagraph.textContent = 'Explore BidMe´s or ';
    targetButton.style.display = 'none';
    targetLoginLink.style.display = 'none';

    avatar.src = user.avatar.url;
    avatar.alt = user.avatar.alt;
    avatar.classList.add('cursor-pointer');
    avatar.addEventListener('click', () => {
      window.location.href = `${PROFILE_PAGE}?name=${user.name}`;
    });

    const link = createHtmlElement({
      element: 'a',
      textContent: 'create new BidMe',
      className: ['underline', 'cursor-pointer'],
    });
    link.addEventListener('click', () => {
      window.location.href = NEW_LISTING_PAGE;
    });

    targetParagraph.appendChild(link);
  } else {
    targetH1.textContent = `Welcome to BidMe`;
    avatarContainer.style.display = 'none';
    targetParagraph.textContent =
      'Sign up to to start bidding and create your BidMe’s';
    targetParagraph.style.display = 'block';

    targetButton.textContent = 'Sign up to get started';
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
  'tracking-widest'
);
targetParagraph.classList.add(
  'text-sm',
  'md:text-xl',
  'lg:text-2xl',
  'text-center'
);
targetButton.classList.add('button');
