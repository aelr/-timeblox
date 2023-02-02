import { createMemo, ParentComponent, ParentProps } from "solid-js";

import './Page.css';
import PageStateProvider, { createPageState} from "./PageState";

const Page: ParentComponent = (props: ParentProps) => {
  const pageContext = createPageState();
  const [pageState] = pageContext;

  const toggleHidingSidebar = createMemo(() => pageState.sidebarActive ? undefined : true);
  return (
    <PageStateProvider value={pageContext}>
      <div class="page-wrapper"
        classList={{ "with-navbar": pageState.hasNavbar, "with-sidebar": true}}
        data-sidebar-hidden={toggleHidingSidebar()} >
        {props.children}
      </div>
    </PageStateProvider>
  )
}

export default Page;
