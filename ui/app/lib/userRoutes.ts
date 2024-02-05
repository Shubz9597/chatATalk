export const createOrUpdateuser = async (userdata : User) : Promise<Response> => {
    return fetch('http://localhost:4000/users/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userdata)
                });
};
