import { Route, Routes, useLocation } from "react-router-dom"
import { FORUM_ROUTE, HOME_ROUTE, LEARN_ROUTE, LOGIN_ROUTE } from "../consts"
import { ForumPage } from "../pages/forumPage/ForumPage"
import { LearnPage } from "../pages/learnPage/LearnPage"
import { LoginPage } from "../pages/loginPage/LoginPage"
import { MainPage } from "../pages/mainpage/MainPage"
import { Header } from "./header/Header"
import { Footer } from "./footer/Footer"



export const AppRouter = () => {

    const location = useLocation();

    // Проверяем, нужно ли показывать заголовок и нижний колонтитул
    const shouldShowHeaderFooter = () => {
        return location.pathname !== LOGIN_ROUTE; // Если текущий маршрут не совпадает с LOGIN_ROUTE, то показываем заголовок и нижний колонтитул
    };

    return (
        <div>
            {shouldShowHeaderFooter() && <Header />}
            <Routes>
                <Route path={HOME_ROUTE} element={ <MainPage /> } exact/>
                <Route path={LOGIN_ROUTE} element={ <LoginPage /> } exact/>
                <Route path={LEARN_ROUTE} element={ <LearnPage /> } exact/>
                <Route path={FORUM_ROUTE} element={ <ForumPage /> } exact/>
            </Routes>
            {shouldShowHeaderFooter() && <Footer />}
        </div>
    )
  }
  