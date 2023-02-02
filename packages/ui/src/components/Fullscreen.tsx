import { ParentProps, createContext } from "solid-js";
import { createStore, produce } from "solid-js/store";
import { ContextProviderComponent } from "solid-js/types/reactive/signal";
import { useContextWhenDefined } from "~/utils";

export type FullscreenProps = {
  fullscreen: boolean
};

export const createFullscreen = () => {
  const [state, setState] = createStore({
    fullscreen: false
  });

  return [
    state,
    {
      setFullscreen: (fullscreen: boolean) => setState(produce((state) => state.fullscreen = fullscreen))
    }
  ] as const;
}

export type FullscreenProviderProps = ReturnType<typeof createFullscreen>;

export const Fullscreen = createContext<FullscreenProviderProps>();

export const FullscreenProvider: ContextProviderComponent<FullscreenProviderProps> = (props: ParentProps<{ value: FullscreenProviderProps }>) => {
  return (
    <Fullscreen.Provider value={props.value}>
      {props.children}
    </Fullscreen.Provider>
  )
};

export default FullscreenProvider;

export const usePageContext = () => useContextWhenDefined(Fullscreen);

