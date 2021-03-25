import axios from 'axios';

const Request = {};
Request.install = function(Vue, options) {
    Vue.prototype.getUsers = function(NID = null, WID) {
        let users = new Promise(function(resolve, reject) {
            axios.get('https://my-json-server.typicode.com/Vespand/crmm-tasks/users')
                .then((response) => {
                        resolve(response.data);
                })
                .catch((error) => {
                    console.log(error.message);
                    reject(error.message);
                });

        });
        return users;
    }
}

export default Request;