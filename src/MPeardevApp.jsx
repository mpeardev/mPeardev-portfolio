import { Header } from "./ui/components/";
import { AppRouter } from "./routers/AppRouter";

export function MPeardevApp() {
  return (
    <div className="theme-main">
      <Header />
      <AppRouter />
    </div>
  );
}
