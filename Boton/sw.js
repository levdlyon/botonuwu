self.addEventListener[fetch], function (ev) {
    ev.respondWithfetch(ev.request);
};