export function get_id(e) { 
    return document.getElementById(e);
};

export function get_class(e) { 
    return document.getElementsByClassName(e);
};

export function qsa(e) {
    return document.querySelectorAll(e);
};

export function qs(e) {
    return document.querySelector(e);
};

export function cl(e) {
    return console.log(e);
};

export function string(e) {
    return JSON.stringify(e);
};

export function parse(e) {
    return JSON.parse(e);
};

<<<<<<< HEAD
export const headers = {
    "Accept" : "application/json",
    "Content-Type": "application/json"
};
=======
export function create_el(e) {
    return document.createElement(e);
}

export const headers = {
    "Accept" : "application/json",
    "Content-Type": "application/json"
};

export const cookie = document.cookie;

export const query_params = window.location.search;
>>>>>>> 2d8792eb781cb830968f9b604ef7d17403785bb5
