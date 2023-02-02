import { ParentComponent, ParentProps } from "solid-js";

import './Card.css';

const Card: ParentComponent = (props: ParentProps) => {

  return (
    <div class="content-wrapper">
      <main class="card">
        {props.children}
      </main>
    </div>
  )
}

export default Card;
