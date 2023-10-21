import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/header';
import { Banner } from '../components/banner';
import { Menu } from '../components/menu';
import { Gallery } from '../components/gallery';
import { Contact } from '../components/contact';
import { Footer } from '../components/footer';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
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
