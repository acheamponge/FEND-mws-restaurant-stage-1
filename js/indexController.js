var userConsent = false;
/**
 * resigter service worker as soon as the page is loaded.
 */
window.addEventListener('load', (event) => {
  new IndexController();
});

function IndexController() {
  this._registerServiceWorker();
}

IndexController.prototype._registerServiceWorker = function () {
  // Check if browser supports service worker
  if (!navigator.serviceWorker) return;

  var indexController = this;

  // register new service worker (if not present in the given scope)
  navigator.serviceWorker.register('/sw.js').then(function (reg) {
    console.log('ServiceWorker Registered');

  /**
   * If there is no controller means this page didn't load using
   * service worker hence the content is loaded from the n/w
   */
    if (!navigator.serviceWorker.controller) {
      return;
    }

    // Check if there is a waiting worker if so then inform the user about the update
    if (reg.waiting) {
      indexController._updateReady(reg.waiting);
      return;
    }

    // Check if there is a installing service worker if so then track it's state
    if (reg.installing) {
      indexController._trackInstalling(reg.installing);
      return;
    }

  /**
   * listen for the service worker's updatefound event, if it fires
   * then track its state
   */
    reg.addEventListener('updatefound', function () {
      indexController._trackInstalling(reg.installing);
    });
  });

  /**
   * listen for the controlling service worker changing
   * and reload the page
   */
  navigator.serviceWorker.addEventListener('controllerchange', function () {
    window.location.reload();
  });
};

/**
 * listen for the installing service worker state
 * and if installed we inform the user about update
 */
IndexController.prototype._trackInstalling = function (worker) {
  var indexController = this;
  worker.addEventListener('statechange', function () {
    if (worker.state == 'installed') {
      indexController._updateReady(worker);
    }
  });
};

IndexController.prototype._updateReady = function (worker) {
  userConsent = confirm("New version available. Do you want to update?");

  if (!userConsent) return;
  // tell the service worker to skipWaiting
  // console.log('updateSW');
  worker.postMessage('updateSW');

};
