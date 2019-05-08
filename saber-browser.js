import "prismjs/themes/prism.css";
// Styles for line highlighting in code blocks
import "saber-highlight-css/default.css"
// @ points to current working directory
import "@/css/global.css";

export default ({ rootOptions }) => {
  rootOptions.head = () => {
    return {
      link: [
        {
          href: "https://fonts.googleapis.com/css?family=Roboto",
          rel: "stylesheet"
        }
      ]
    };
  };
};
