import { ParentProps, createContext, For } from "solid-js";
import { createStore, produce } from "solid-js/store";
import { ContextProviderComponent } from "solid-js/types/reactive/signal";
import { useContextWhenDefined } from "@timeblox/ui/utils";

export type PaddingColumnStateProps = {
  paddingColumns: number
};

export const createPaddingColumnState = () => {
  const [state, setState] = createStore({
    paddingColumns: 0
  });

  return [
    state,
    {
      setPaddingColumns: (paddingColumns: number) => setState(produce((state) => state.paddingColumns = paddingColumns))
    }
  ] as const;
}

export type PaddingColumnStateProviderProps = ReturnType<typeof createPaddingColumnState>;

export const PaddingColumnState = createContext<PaddingColumnStateProviderProps>();

export const PaddingColumnStateProvider: ContextProviderComponent<PaddingColumnStateProviderProps> = (props: ParentProps<{ value: PaddingColumnStateProviderProps }>) => {
  return (
    <PaddingColumnState.Provider value={props.value}>
      {props.children}
    </PaddingColumnState.Provider>
  )
};

export default PaddingColumnStateProvider;

export const usePaddingColumnContext = () => useContextWhenDefined(PaddingColumnState);

