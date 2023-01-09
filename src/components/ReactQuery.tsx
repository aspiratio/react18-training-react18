import { Suspense } from "react";
import { AlbumList } from "./AlbumList";
import { Sidebar } from "./Sidebar";
import { TodoList } from "./TodoList";
import { ErrorBoundary } from "react-error-boundary";

export const ReactQuery = () => {
  return (
    <div style={{ display: "flex", padding: "16px" }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <ErrorBoundary fallback={<p>Listエラーです</p>}>
          <Suspense fallback={<p>Listローディング中です</p>}>
            <AlbumList />
            <TodoList />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};
