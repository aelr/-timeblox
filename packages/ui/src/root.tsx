// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "halfmoon/css/halfmoon-variables.min.css";
import "uno.css";
import "./root.css";
import PageFrame from "./PageFrame";

export default function Root() {

  return (
    <Html lang="en" class="auto-scaling-disabled">
      <Head>
        <Title>Timeblox - Design System</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          @import url('https://fonts.cdnfonts.com/css/manrope');
        </style>
        <script src="https://unpkg.com/phosphor-icons"></script>
      </Head>
      <Body class="with-custom-webkit-scrollbars with-custom-css-scrollbars">
        <ErrorBoundary>
          <PageFrame>
            <Suspense>
              <Routes>
                <FileRoutes />
              </Routes>
            </Suspense>
          </PageFrame>
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  );
}
