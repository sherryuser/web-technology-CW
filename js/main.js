/* Mobile Navbar
 */
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

/*
 * cookie-notice.js
 */

void (function (root, factory) {
  if (typeof define === "function" && define.amd) define(factory);
  else if (typeof exports === "object") module.exports = factory();
  else root.CookieNotice = factory();
})(this, function () {
  function CookieNotice() {
    ready(run);
  }

  CookieNotice.options = {
    message:
      "<p>This website uses cookies to help us give you the best experience when you visit. By using this website you consent to our use of these cookies.</p>",
    dismiss: "Dismiss",
  };

  function run() {
    if (window.localStorage.cookieNoticeDismissed) return;
    show();
  }

  function dismiss() {
    var notice = document.getElementById("cookie-notice");
    if (notice) notice.parentNode.removeChild(notice);
    window.localStorage.cookieNoticeDismissed = true;
  }

  function undismiss() {
    delete window.localStorage.cookieNoticeDismissed;
  }

  function show() {
    var $div = document.createElement("div");
    $div.className = "cookie-notice";
    $div.id = "cookie-notice";

    var $message = document.createElement("div");
    $message.className = "cookie-notice-message";
    $message.innerHTML = CookieNotice.options.message;
    $div.appendChild($message);

    var $dismiss = document.createElement("button");
    $dismiss.innerHTML = CookieNotice.options.dismiss;
    $dismiss.onclick = dismiss;
    $div.appendChild($dismiss);

    document.body.appendChild($div);
  }

  function ready(fn) {
    if (document.readyState === "complete") {
      return fn();
    } else if (document.addEventListener) {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      document.attachEvent("onreadystatechange", function () {
        if (document.readyState === "interactive") fn();
      });
    }
  }

  CookieNotice.run = run;
  CookieNotice.dismiss = dismiss;
  CookieNotice.undismiss = undismiss;

  return CookieNotice;
});

CookieNotice();

// My Accaunt

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container--account");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
