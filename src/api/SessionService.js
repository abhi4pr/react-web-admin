/**
 * Session Actions
 */
export const SetUserSession = (user) => {
    localStorage.setItem('User', JSON.stringify(user));
    localStorage.setItem("user_id", user.id);
}

export const GetUserSession = () => {
    return JSON.parse(localStorage.getItem('User'));
}

export const GetUserIdSession = () => {
    return JSON.parse(localStorage.getItem('user_id'));
}

export const RemoveSession = () => {
    localStorage.removeItem('user_id');
    localStorage.removeItem('User');
    localStorage.removeItem('AuthToken');
}

export const SetAuthTokenSession = (accessToken) => {
    localStorage.setItem('AuthToken', accessToken);
}

export const SetUserRole = (userRole) => {
    localStorage.setItem('userRole', JSON.stringify(userRole));
    return JSON.parse(localStorage.getItem('userRole'));
}

export const GetUserRole = () => {
    var userrole = localStorage.getItem('userRole');
    if (userrole) {
          return JSON.parse(userrole);
    } else {
          return null
    }

}

export const GetAuthTokenSession = () => {
    return localStorage.getItem('AuthToken');
}