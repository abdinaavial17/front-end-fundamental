import AOS from 'aos';
import 'aos/dist/aos.css';
import './style/style.css';
import './script/component/input-title.js';
import './script/component/input-body.js';
import './script/component/notes-box.js';
import fetchNotes from './script/data/remote.js';

AOS.init();

fetchNotes();
