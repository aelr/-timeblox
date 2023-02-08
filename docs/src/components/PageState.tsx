import { ParentProps, createContext } from "solid-js";
import { createStore, produce } from "solid-js/store";
import { ContextProviderComponent } from "solid-js/types/reactive/signal";
import { useContextWhenDefined } from "@timeblox/ui/utils";

export type PageStateProps = {
  darkMode: boolean,
  hasNavbar: boolean,
  hasSidebar: boolean,
  sidebarActive: boolean
};

export const createPageState = () => {
  const [state, setState] = createStore({
    darkMode: false,
    hasNavbar: false,
    hasSidebar: false,
    sidebarActive: false
  });

  return [
    state,
    {
      toggleDarkMode: () => setState(produce((state) => state.darkMode = !state.darkMode)),
      darkMode: () => setState(produce((state) => state.darkMode = true)),
      lightMode: () => setState(produce((state) => state.darkMode = false)),
      registerNavbar: () => setState(produce((state) => state.hasNavbar = true)),
      deregisterNavbar: () => setState(produce((state) => state.hasNavbar = false)),
      registerSidebar: () => setState(produce((state) => state.hasSidebar = true)),
      deregisterSidebar: () => setState(produce((state) => state.hasSidebar = false)),
      toggleSidebar: () => setState(produce((state) => state.sidebarActive = !state.sidebarActive)),
      activateSidebar: () => setState(produce((state) => state.sidebarActive = true)),
      deactivateSidebar: () => setState(produce((state) => state.sidebarActive = false))
    }
  ] as const;
}

export type PageStateProviderProps = ReturnType<typeof createPageState>;

export const PageState = createContext<PageStateProviderProps>();

export const PageStateProvider: ContextProviderComponent<PageStateProviderProps> = (props: ParentProps<{ value: PageStateProviderProps }>) => {
  return (
    <PageState.Provider value={props.value}>
      {props.children}
    </PageState.Provider>
  )
};

export default PageStateProvider;

export const usePageContext = () => useContextWhenDefined(PageState);

