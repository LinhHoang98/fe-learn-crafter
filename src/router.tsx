import {createRootRoute, createRoute, createRouter, Link, Outlet} from "@tanstack/react-router";
import SignUp from "@/pages/SignUp.tsx";

const rootRoute = createRootRoute({
    component: () => (
        <Outlet/>
    )
});

const signUpRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/sign-up',
    component: SignUp,
});

const signInRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/sign-in',
    component: function SignIn() {
        return (
            <div>Sign In</div>
        )
    }
});

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    id: 'home',
    component: function Home() {
        return (<>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
            <Outlet/>
        </>)
    }
});

const homeRoute = createRoute({
    getParentRoute: () => indexRoute,
    path: '/',
    component: function About() {
        return <div className="p-2">Hello from Home!</div>
    },
});

const aboutRoute = createRoute({
    getParentRoute: () => indexRoute,
    path: '/about',
    component: function About() {
        return <div className="p-2">Hello from About!</div>
    },
});

const routeTree = rootRoute.addChildren([
    signUpRoute,
    signInRoute,
    indexRoute.addChildren([
        homeRoute,
        aboutRoute
    ])
]);

const router = createRouter({routeTree});

export default router;