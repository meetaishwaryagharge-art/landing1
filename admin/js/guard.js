// Classic (non-module) script: shows a clear message instead of a blank/spinning page when the admin cannot start.
(function () {
  function box(html) {
    var d = document.createElement("div");
    d.style.cssText = "max-width:560px;margin:40px auto;padding:20px 24px;background:#fff8e6;border:1px solid #f0d58a;border-radius:14px;font:15px/1.5 sans-serif;color:#4a3b00;position:relative;z-index:2000";
    d.innerHTML = html; document.body.insertBefore(d, document.body.firstChild);
  }
  if (location.protocol === "file:") {
    box("<b>Open this page through a web server, not by double-clicking the file.</b><br>The dashboard uses ES modules, which browsers block on <code>file://</code>.<br>" +
        "Run <code>npx serve .</code> in the project folder and open <code>http://localhost:3000/admin/login.html</code>, or use your Firebase Hosting link.");
    return;
  }
  // index.html only: if the dashboard is still showing its loading spinner after 10s, tell the user why.
  if (document.getElementById("view")) setTimeout(function () {
    if (document.querySelector("#view .spinner-border"))
      box("<b>The dashboard could not start.</b><br>Check your internet connection and that this site's domain is listed in Firebase &gt; Authentication &gt; Settings &gt; Authorised domains. Then reload, or <a href='login.html'>sign in again</a>.");
  }, 10000);
})();
