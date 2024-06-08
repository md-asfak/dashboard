import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Overview from "./components/Overview";
import Statuz from "./components/Statuz";
import MainEvent from "./components/MainEvent";
import ListMain from "./components/ListCart/ListMain";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col gap-5">
        <Overview />
        <Header />
        <MainContent />
        <Statuz />
        <MainEvent />
        <ListMain />
      </div>
    </div>
  );
}
