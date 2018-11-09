import Button from './components/elements/Button'
import MainTitle from './components/elements/MainTitle'
import Contact from './components/forms/Contact'
import Login from './components/forms/Login'
import Reconfirm from './components/forms/Reconfirm'
import Register from './components/forms/Register'
import Hero from './components/heros/Index'
import WithModal from './components/heros/WithModal'
import Footer from './components/layout/footer/Index'
import Header from './components/layout/header/Index'
import Modal from './components/modals/Index'
import Notification from './components/notifications/Index'
import Slideshow from './components/slideshows/Index'
import WithProgressBar from './components/slideshows/WithProgressBar'

export default {
  Elements: {
    Button,
    MainTitle,
  },
  Forms: {
    Contact,
    Login,
    Reconfirm,
    Register
  },
  Heros: {
    Hero,
    WithModal
  },
  Layout: {
    Header,
    Footer
  },
  Modal,
  Notification,
  Slideshows: {
    Slideshow,
    WithProgressBar
  }
}
