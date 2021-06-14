import util from "~/helpers/util";
export default function(context) {
    const { req, redirect } = context;
    if (process.server) {
        if (util.getCookieFromHeader(req.headers.cookie, "token")) {
            redirect("/");
        } else {
            redirect("/login");
        }
    } else {
        console.log(context)
        if (util.getCookie("token")) {
            redirect("/");
        } else {
            redirect("/login");
        }
    }
}
