export const configMindbox = () => {
  window.mindbox =
    window.mindbox ||
    function () {
      window.mindbox.queue.push(arguments);
    };
  window.mindbox.queue = window.mindbox.queue || [];
  window.mindbox("create", {
    endpointId: "wpush-test",
  });

  var script = document.createElement("script");
  script.src = "https://api.mindbox.ru/scripts/v1/tracker.js";
  document.getElementsByTagName("head")[0].appendChild(script);
};
