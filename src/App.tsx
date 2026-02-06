

import Header from "@/Layout/Header/Header.tsx";

import MainMenu from "@sections/MainMenu/MainMenu.tsx";
import GrowthStats from "@sections/GrowthStats/GrowthStats.tsx";
import TaskChecker from "@sections/TaskChecker/TaskChecker.tsx";
import Integration from "@sections/Integration/Integration.tsx";
import Cases from "@sections/Cases/Cases.tsx";
import Faq from "@sections/Faq/Faq.tsx";
import Curators from "@sections/Curators/Curators.tsx";

import Footer from "@/Layout/Footer/Footer.tsx";

function App() {

  return (
        <>
            <Header />

            <MainMenu />
            <GrowthStats />
            <TaskChecker />
            <Integration />
            <Cases />
            <Faq />
            <Curators />

            <Footer />
        </>
  )
}

export default App;
