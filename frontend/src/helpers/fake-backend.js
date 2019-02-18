export function configureFakeBackend() {
    let users = [{id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User'}];
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {

                // authenticate
                if (url.endsWith('/user/auth') && opts.method === 'POST') {
                    // get parameters from post request
                    let params = JSON.parse(opts.body);

                    // find if any user matches login credentials
                    let filteredUsers = users.filter(user => {
                        return user.username === params.username && user.password === params.password;
                    });

                    if (filteredUsers.length) {
                        // if login details are valid return user details and fake jwt token
                        let user = filteredUsers[0];
                        let responseJson = { ...user, token: 'fake-jwt-token'};
                        delete responseJson.password;
                        resolve({ok: true, text: () => Promise.resolve(JSON.stringify(responseJson))});
                    } else {
                        // else return error
                        reject('Username or password is incorrect');
                    }

                    return;
                }

                if (url.endsWith('/') && opts.method === 'GET') {
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token')
                        resolve({ok: true, text: () => Promise.resolve(JSON.stringify("data"))});
                    else reject('Unauthorised');
                    return;
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}