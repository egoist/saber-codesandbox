import 'prismjs/themes/prism-tomorrow.css'
// Styles for line highlighting in code blocks
import 'saber-highlight-css/default.css'
// @ points to current working directory
import '@/css/global.css'

export default ({ setHead }) => {
  setHead({
    link: [
      {
        href: 'https://fonts.googleapis.com/css?family=Roboto',
        rel: 'stylesheet'
      }
    ]
  })
}
