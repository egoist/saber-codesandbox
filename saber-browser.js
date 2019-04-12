import "prismjs/themes/prism.css";
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
