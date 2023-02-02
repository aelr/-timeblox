import { For, Match, onCleanup, onMount, Switch } from "solid-js";
import { A } from "solid-start";
import { useLocation } from "@solidjs/router";

import './DesignSystemSidebar.css';
import { StoriesMap } from "../stories";
import { camelToTitleCase, pascalToSnake, wordsToSnake } from "../utils";
import { usePageContext } from "./PageState";

const DesignSystemSidebar = () => {
  const [pageState, pageMutators] = usePageContext();

  onMount(() => {
    pageMutators.registerSidebar();
    pageMutators.activateSidebar();

    const location = useLocation<{ component: string, story: string }>();
    const componentMatch = location.pathname.match(/component\/(.+)/);
    if (componentMatch) {
      const [componentSnake, storySnake] = componentMatch[1].split("/");
      const componentDrawer = document.getElementById(componentSnake + "-drawer");
      componentDrawer?.setAttribute("open", "");
    }
  });

  onCleanup(() => pageMutators.deregisterSidebar());
  const headerOrDivider = /^[:/]/;
  return (
    <aside class="sidebar">
      <div class="sidebar-menu">
        <h2 class="sidebar-title">Components</h2>
        <div class="sidebar-content mt-0">
          <For each={Object.entries(StoriesMap)}>{([componentName, componentCategories]) =>
            <>
              <div class="sidebar-divider"></div>
              <div class="ml-8 mb-0">{camelToTitleCase(componentName)}</div>
              <For each={Object.entries(componentCategories)}>{([categoryName, stories]) =>
                <details class="collapse-panel mt-0" id={pascalToSnake(componentName) + "-" + pascalToSnake(categoryName) + "-drawer"}>
                  <summary class="collapse-header border-0 bg-transparent">{camelToTitleCase(categoryName)}</summary>
                  <ul class="content mt-0">
                    <For each={Object.entries(stories)}>{([storyName, story]) =>
                      <li>
                        <Switch fallback={story}>
                          <Match when={!headerOrDivider.test(storyName[0])}>
                            <A href={`component/${pascalToSnake(componentName)}/${pascalToSnake(categoryName)}/${wordsToSnake(storyName)}`}>{storyName}</A>
                          </Match>
                        </Switch>
                      </li>
                    }</For>
                  </ul>
                </details>
              }</For>
            </>

          }</For>
        </div>
      </div>

    </aside>
  )
}

export default DesignSystemSidebar;
