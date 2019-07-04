import Login from "./main/login.component";
import Domain from "./domain/domain.component"

const routes = [
    {
        path: '/',
        exact: true,
        component: Login
    },
    {
       path: '/domain',
       exact:true,
       component: Domain
    }
];

export default routes;