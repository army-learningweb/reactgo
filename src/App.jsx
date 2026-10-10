import "./App.css";
import { Routes, Route } from "react-router";
import Sidebar from "./components/ui/Sidebar";
import Freelancer from "./components/Freelancer/Freelancer";
import FreelancerDetails from "./components/Freelancer/FreelancerDetails";
import TodoApp from "./components/TodoApp/TodoApp";
import ToasterCustom from "./components/ui/ToasterCustom";
import CounterApp from "./components/CounterApp/CounterApp";
import Arrcordian from "./components/Arrcordian/Arrcordian";
import TimerClock from "./components/Timer/TimerClock";
import CountdownOTP from "./components/CoundownOTP/CountdownOTP";
import InputPassword from "./components/Input/InputPassword";
import StickyHeader from "./components/StickyHeader/StickyHeader";
import DebounceSearch from "./components/DebounceSearch/DebounceSearch";
import SimpleInfiniteScrollList from "./components/Observer/SimpleInfiniteScrollList";

import { Layout } from "./components/Pages/Layout";
import HomePage from "./components/Pages/HomePage";
import AboutPage from "./components/Pages/AboutPage";
import ContactPage from "./components/Pages/ContactPage";
import { PageNotFound } from "./components/Pages/PageNotFound";

function App() {
  return (
    <>
      <ToasterCustom />
      <div className="flex gap-1 w-full mx-auto">
        <Sidebar />
        <main className="flex-1 p-5 border-gray-300">
          <Routes>
            {/* FREELANCER */}
            <Route path="/" element={<Freelancer />} />
            <Route
              path="/freelancerdetails/:id"
              element={<FreelancerDetails />}
            />

            {/* OTHER */}
            <Route path="/todoapp" element={<TodoApp />} />
            <Route path="/counterapp" element={<CounterApp />} />
            <Route path="/arrcordian" element={<Arrcordian />} />
            <Route path="/timerclock" element={<TimerClock />} />
            <Route path="/countdownotp" element={<CountdownOTP />} />
            <Route path="/inputpassword" element={<InputPassword />} />
            <Route path="/stickyheader" element={<StickyHeader />} />
            <Route path="/debouncesearch" element={<DebounceSearch />} />
            <Route
              path="/simpleinfinitescrolllist"
              element={<SimpleInfiniteScrollList />}
            />

            {/* PAGES */}
            <Route path="/pages" element={<Layout />}>
              <Route index element={<HomePage />}></Route>
              <Route path="about" element={<AboutPage />}></Route>
              <Route path="contact" element={<ContactPage />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Route>
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
