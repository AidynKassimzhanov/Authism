import { Route, Routes, useLocation, Navigate } from "react-router-dom"
import { ADMIN_ROUTE, FORUM_ROUTE, HOME_ROUTE, LEARN_ROUTE, LOGIN_ROUTE } from "../consts"
import { ForumPage } from "../pages/forumPage/ForumPage"
import { LearnPage } from "../pages/learnPage/LearnPage"
import { LoginPage } from "../pages/loginPage/LoginPage"
import { MainPage } from "../pages/mainpage/MainPage"
import { Header } from "./header/Header"
import { Footer } from "./footer/Footer"
import { AdminPage } from "../pages/adminPage/AdminPage"
import { useSelector } from "react-redux"



const ProtectedRoute = ({ element, isAdmin, ...rest }) => {
    return isAdmin && element;
  };

export const AppRouter = () => {

    const {isAdmin} = useSelector(state => state.main)

    const location = useLocation();

    const headerRoutes = [ LOGIN_ROUTE, LEARN_ROUTE, ADMIN_ROUTE ]

    // Проверяем, нужно ли показывать заголовок и нижний колонтитул
    const shouldShowHeader = () => {
        return !headerRoutes.includes(location.pathname) && !location.pathname.startsWith('/admin');
    };

    const shouldShowFooter = () => {
        return location.pathname !== LOGIN_ROUTE ; // Если текущий маршрут не совпадает с LOGIN_ROUTE, то показываем заголовок и нижний колонтитул
    };

    return (
        <div >
            
            <div className="appContainer">
                {shouldShowHeader() && <Header />}
                <Routes>
                    <Route path={HOME_ROUTE} element={ <MainPage /> } exact/>
                    <Route path={LOGIN_ROUTE} element={ <LoginPage /> } exact/>
                    <Route path={LEARN_ROUTE} element={ <LearnPage /> } exact/>
                    <Route path={FORUM_ROUTE} element={ <ForumPage /> } exact/>
                    <Route path='/admin/*' element={ <AdminPage /> } />
                    {/* <Route path={ADMIN_ROUTE} element={ <AdminPage /> } /> */}
                    {/* <ProtectedRoute
                        path={ADMIN_ROUTE}
                        element={<AdminPage />}
                        isAdmin={isAdmin}
                    /> */}
                </Routes>
                {shouldShowFooter() && <Footer />}
            </div>
        </div>
    )
  }
  