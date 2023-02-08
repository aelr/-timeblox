import {{ name }} from "../components/{{name}}";
import { Stories } from "./stories";

const {{ camelCase name }}: Stories = {
  "Category": {
    "Simple": () => {

      return (
        <{{name}}></{{name}}>
      )
    }
  }
}

export default {{camelCase name }};
