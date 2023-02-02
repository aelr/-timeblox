import { createEffect, createMemo, createSignal, For, Match, ParentComponent, ParentProps, Switch } from "solid-js";
import { Dynamic } from "solid-js/web";
import FullscreenProvider, { createFullscreen } from "./components/Fullscreen";
import DesignSystemNavbar from "./components/DesignSystemNavbar";
import PaddingColumnStateProvider, { createPaddingColumnState, PaddingColumnState } from "./components/PaddingColumnState";
import Page from "./components/Page";
import DesignSystemSidebar from "./components/DesignSystemSidebar";

const PageFrame: ParentComponent = (props: ParentProps) => {
  const fullscreenContext = createFullscreen();
  const [fullscreenState, { setFullscreen }] = fullscreenContext;

  const paddingColumnContext = createPaddingColumnState();
  const [paddingColumnState] = paddingColumnContext;

  return (
    <FullscreenProvider value={fullscreenContext}>
      <>
        <Switch>
          <Match when={!fullscreenState.fullscreen}>
            <PaddingColumnStateProvider value={paddingColumnContext}>
              <Page>
                <DesignSystemNavbar></DesignSystemNavbar>
                <DesignSystemSidebar></DesignSystemSidebar>
                <div class="content-wrapper">
                  <div class="container-fluid h-full">
                    <div class="row h-full">
                      <div class="col h-full">
                        {props.children}
                      </div>
                      <For each={Array.from(".".repeat(paddingColumnState.paddingColumns))}>
                        {() => <div class="col"></div>}
                      </For>
                    </div>
                  </div>
                </div>
              </Page>
            </PaddingColumnStateProvider>
          </Match>
          <Match when={fullscreenState.fullscreen}>
            {props.children}
          </Match>
        </Switch>
        <div class="absolute right-0 bottom-0 mr-8 mb-4">
          <Switch>
            <Match when={!fullscreenState.fullscreen}>
              <button class="btn btn-action" type="button" onClick={() => setFullscreen(true)}>
                <i class="ph-arrows-out"></i>
              </button>
            </Match>
            <Match when={fullscreenState.fullscreen}>
              <button class="btn btn-action" type="button" onClick={() => setFullscreen(false)}>
                <i class="ph-arrows-in"></i>
              </button>
            </Match>
          </Switch>
        </div>
      </>
    </FullscreenProvider >

  )
}

export default PageFrame;
