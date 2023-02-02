import { Component, createEffect, onCleanup, onMount } from 'solid-js';

import './DesignSystemNavbar.css';
import { usePaddingColumnContext } from './PaddingColumnState';
import { usePageContext } from './PageState';

const DesignSystemNavbar: Component = () => {
  const [pageState, pageMutators] = usePageContext();

  onMount(() => pageMutators.registerNavbar());
  onCleanup(() => pageMutators.deregisterNavbar());

  createEffect(() => {
    pageState.darkMode ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode");
  });

  const [paddingColumnState, paddingColumnMutators] = usePaddingColumnContext();

  return (
    <div class="navbar justify-content-between">
      <div class="navbar-content">
        <button class="btn btn-action" type="button" onclick={pageMutators.toggleSidebar}>
          <i class="ph-square-half"></i>
        </button>
      </div>

      <div class="navbar-brand">
        <img src="/logo.png"></img>
        <span>Design System</span>
      </div>
      <div class="navbar-content">
        <div class="dropdown dropleft toggle-on-hover">
          <button class="btn" data-toggle="dropdown" type="button">{"Padding: " + paddingColumnState.paddingColumns}</button>
          <div class="dropdown-menu">
            <h6 class="dropdown-header">Padding Columns:</h6>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button class="btn btn-action" type="button" onclick={() => paddingColumnMutators.setPaddingColumns(0)}>0</button>
              <button class="btn btn-action" type="button" onclick={() => paddingColumnMutators.setPaddingColumns(1)}>1</button>
              <button class="btn btn-action" type="button" onclick={() => paddingColumnMutators.setPaddingColumns(2)}>2</button>
              <button class="btn btn-action" type="button" onclick={() => paddingColumnMutators.setPaddingColumns(3)}>3</button>
            </div>
          </div>
        </div>
        <button class="btn btn-action hidden-dm" type="button" onclick={pageMutators.toggleDarkMode}>
          <i class="ph-sun"></i>
        </button>
        <button class="btn btn-action hidden-lm" type="button" onclick={pageMutators.toggleDarkMode}>
          <i class="ph-moon"></i>
        </button>
      </div>
    </div>
  )
}

export default DesignSystemNavbar;