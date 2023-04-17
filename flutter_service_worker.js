'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "297f179be6809e66468b6c1e82e53901",
"assets/assets/fonts/avdira_j.ttf": "b4e3fab18a48b6c4c1356af24cd1549b",
"assets/assets/fonts/avdira_r.ttf": "c772258b86c295118679a2785819c3e2",
"assets/assets/fonts/inter400.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/assets/fonts/inter700.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/assets/images/appgallery.png": "db0dcfb6203931b50700cc159e308845",
"assets/assets/images/appstore.png": "2772ac352d247c52746dccc200418495",
"assets/assets/images/app_name.png": "66ff953d45eb35f897a3f5ef61e09cbf",
"assets/assets/images/app_name_big.png": "c20d8e7fd39a75e5a9070b1e37a98806",
"assets/assets/images/app_name_small.png": "27aa6c51cb7e9db513fe0cd96cd420b5",
"assets/assets/images/arrow_up.png": "4458e48c7b23c0597012026cdbf3275a",
"assets/assets/images/book_open.png": "61839e693972436d54d6dfdf4c10621f",
"assets/assets/images/book_open_small.png": "d58f8f249c6f2f3b28d4b20d009a4e7d",
"assets/assets/images/copy.png": "c43a7bbfbd2ad6f8eb56ca41d8554dcc",
"assets/assets/images/england.png": "c433e1c6a3387633452d3f72cd99022c",
"assets/assets/images/find.png": "2cc0602d19840b838034bf1a59809c71",
"assets/assets/images/googleplay.png": "6b8852d2160b67d200e703209cbcc86c",
"assets/assets/images/icon.png": "d690e15210fadd4d906cf4a943dc04f7",
"assets/assets/images/icon_1.png": "cfb7f7bbd58b5ef3168629e9e9bba6ab",
"assets/assets/images/icon_2.png": "dc9aa36a017470adcec21776fd6e38ce",
"assets/assets/images/keyboard.png": "e82ae3c8b2febe2abe313d92ad14eb81",
"assets/assets/images/label_1.png": "eec46e99fc9a7a1aff55beea19a31803",
"assets/assets/images/label_2.png": "0033eb0a81581ad4fc5e1bfaaf93265f",
"assets/assets/images/label_3.png": "eec46e99fc9a7a1aff55beea19a31803",
"assets/assets/images/logo.png": "4da95dddd98256fe449ba79f82caf3ef",
"assets/assets/images/logo_small.png": "df9e029ca4ad4466bf238a772836787e",
"assets/assets/images/news.png": "fa238a46ff02f0e012e8712aa3ca25cf",
"assets/assets/images/news_small.png": "08ff1e1b271f175f55265d690fab50bd",
"assets/assets/images/russia.png": "a9368206c4f6d44c610b91604fc394d7",
"assets/assets/images/rustore.png": "4eca274042c99627c0fd01326e9d98b8",
"assets/assets/images/support.png": "e9adee07ef25e3d55bdbd58146a84a65",
"assets/assets/images/support_small.png": "ae3b4c29d154830ac95f8901fc6d1a0e",
"assets/assets/images/united_kingdom.png": "b957a61f19448f5307037ea7dbc212a4",
"assets/assets/translations/en.json": "455e3759cc6e9c21eef0647aba09299e",
"assets/assets/translations/ru.json": "6a3b41d0351922431d01dd08a156709a",
"assets/FontManifest.json": "fc9c8930312e967fbf262f50a78de79b",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "fc179073765d3bcd113c193def7e9b00",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "4dc0ec29caf7c3f54ef2503fb07883f1",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "51ffc689836bb1287c78280654e70fd3",
"/": "51ffc689836bb1287c78280654e70fd3",
"main.dart.js": "675ac58859557834798e7fe83390ed3e",
"manifest.json": "5ddd668d98076f11605ef65838dbea72",
"version.json": "7f60cfa703c98bb78178d6458396ef98"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
