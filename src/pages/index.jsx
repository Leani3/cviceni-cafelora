import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const response = await fetch('http://localhost:4000/api/drinks');
const drinksData = await response.json();

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={drinksData.result} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);

const naviToggle = (event) => {
  const navi = document.querySelector('.rollout-nav');

  navi.classList.toggle('nav-closed');
};

document.querySelector('.nav-btn').addEventListener('click', naviToggle);

document.querySelectorAll('.navigation a').forEach((a) => {
  a.addEventListener('click', naviToggle);
});

document.querySelectorAll('form').forEach((form) => {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const orderedId = event.target.querySelector('input').value;

    console.log(orderedId);

    const sendToApi = await fetch(
      `http://localhost:4000/api/drinks/${orderedId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          {
            op: 'replace',
            path: '/ordered',
            value: true,
          },
        ]),
      },
    );

    const apiResponse = await sendToApi.json();
    console.log(apiResponse);
    window.location.reload();
  });
});
