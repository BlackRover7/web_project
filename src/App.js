import './App.css';
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import React from "react";
import { PageNotFound, News, New, Bookmarks, About } from "./index";

function App() {
  return (
    <HashRouter>
      <header className="mainMenu">
        <nav>
          <Link className="menuLink" to="/news"> Новости</Link>
          <Link className="menuLink" to="/about"> О приложении</Link>
          <Link className="menuLink" to="/bookmarks"> Закладки</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="*" element={<PageNotFound />}>
          </Route>
          <Route exact path="/ppireact" element={<News />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/news" element={<News />}>
          </Route>
          <Route path="/news/:id" element={<New />}>
          </Route>
          <Route path="/:" element={<News />}>
          </Route>
          <Route exact path="/" element={<News />}>
          </Route>
          <Route path="/bookmarks" element={<Bookmarks />}>
          </Route>
        </Routes>
      </main>
    </HashRouter>)
}

export default App;