import axios from 'axios';

export const partner = "Suskan-Demo";

export const key = "Suskan-Demo";

export var apikey = "";


export const obtainkey = () => {
    axios.post('https://pulsedb-qa.pulselabs.co.in/rest/api/v1/partner_login', {
        partner: partner,
        key: key
      })
      .then(function (response) {
        apikey = response.data.data.auth;
      })
      .catch(function (error) {
        console.log(error);
      });
}