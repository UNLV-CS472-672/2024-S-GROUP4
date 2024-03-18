// get whatever is stored in a cookie
// such as session_id, location, user id
const getCookie = (name, cookies) => {
    const regex = new RegExp("(?:(?:^|.*;\\s*)" + name + "\\s*=\\s*([^;]*).*$)|^.*$");
    let cookie = cookies.replace(regex, "$1")
    return cookie
};

export { getCookie }