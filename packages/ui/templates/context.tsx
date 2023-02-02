import { ParentProps, createContext } from "solid-js";
import { createStore, produce } from "solid-js/store";
import { ContextProviderComponent } from "solid-js/types/reactive/signal";
import { useContextWhenDefined } from "~/utils";

export type {{name}}Props = {

};

export const create{{name}} = () => {
  const [state, setState] = createStore({

  });

  return [
    state,
    {
      modifier: () => setState(produce((state) => state.property = undefined))
    }
  ] as const;
}

export type {{name}}ProviderProps = ReturnType<typeof create{{name}}>;

export const {{name}} = createContext<{{name}}ProviderProps>();

export const {{name}}Provider: ContextProviderComponent<{{name}}ProviderProps> = (props: ParentProps<{ value: {{name}}ProviderProps }>) => {
  return (
    <{{name}}.Provider value={props.value}>
      {props.children}
    </{{name}}.Provider>
  )
};

export default {{name}}Provider;

export const use{{name}}Context = () => useContextWhenDefined({{name}});

