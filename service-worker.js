/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["JavaScript.js","ff033f6c475dd99a68dc8e0a8e700e1f"],["README.md","9a5c6b9977f5ab525c1881da38845752"],["Thumbs.db","b75e5971d846ebf4b63f20877d319021"],["css/one-page-wonder.css","467bb9ff543520fe6bb3d75544da94c9"],["docs/JavaScript.js","ff033f6c475dd99a68dc8e0a8e700e1f"],["docs/css/one-page-wonder.css","467bb9ff543520fe6bb3d75544da94c9"],["docs/favicon.ico","19dac23d0ae52029b0c09d27b90decc8"],["docs/img/01.jpg","5b4fd7558513f413aa273a9418752d99"],["docs/img/02.jpg","e35cb05f3e7f4716e213436a6bf9b538"],["docs/img/03.jpg","ccb005a89c3e1da4ff0cecc9f5b1954d"],["docs/img/Thumbs.db","08b499dd653abddc47e9484fcfc96367"],["docs/img/contact.png","469a236f572cc0cc37566f13f96a9115"],["docs/index.html","e3652832cbe9ea447484b562cde186af"],["docs/vendor/bootstrap/css/bootstrap-grid.css","af140c1b8accf71a5efb4750588039f8"],["docs/vendor/bootstrap/css/bootstrap-grid.min.css","c4e58fc63a4a243bd806a5cec941cf5b"],["docs/vendor/bootstrap/css/bootstrap-reboot.css","a3b54592a68baf9a041efa4e8139f52d"],["docs/vendor/bootstrap/css/bootstrap-reboot.min.css","fa64b9a8e65118bc480f4e8ad4001813"],["docs/vendor/bootstrap/css/bootstrap.css","609508fcdcdb45f59b77da33b405edbc"],["docs/vendor/bootstrap/css/bootstrap.css.map","7f22dc40aa22dc514eaf73c8d619e8bd"],["docs/vendor/bootstrap/css/bootstrap.min.css","e59aa29ac4a3d18d092f6ba813ae1997"],["docs/vendor/bootstrap/css/bootstrap.min.css.map","ea6c3c97d126f9996d7cc206f2df625b"],["docs/vendor/bootstrap/js/bootstrap.bundle.js","a9ba10ace11075c9fd1dce8457c95b66"],["docs/vendor/bootstrap/js/bootstrap.bundle.js.map","1d446b0e668ececab31cd3cb5e137d4a"],["docs/vendor/bootstrap/js/bootstrap.bundle.min.js","ce2d7df84b9758b467f225e1f6efbc4f"],["docs/vendor/bootstrap/js/bootstrap.bundle.min.js.map","c41626cedb5efebbfb7b18e140042613"],["docs/vendor/bootstrap/js/bootstrap.js","ee003c1c7bf3d79ad359f4e845604513"],["docs/vendor/bootstrap/js/bootstrap.js.map","1659c6f13c0a9611a9ae186d99184f18"],["docs/vendor/bootstrap/js/bootstrap.min.js","85636d56f74c4c11d1abecae2051c1e4"],["docs/vendor/bootstrap/js/bootstrap.min.js.map","97aa185a0946b2aae827ac35ea0bcabb"],["docs/vendor/jquery/jquery.js","b0e8755b0ab71a0a4aea47c3b589b47e"],["docs/vendor/jquery/jquery.min.js","378087a64e1394fc51f300bb9c11878c"],["docs/vendor/jquery/jquery.min.map","bae3c738b74dd89a555b7a54e4891608"],["docs/vendor/jquery/jquery.slim.js","463ddafe4fe82461cec020e4666981b0"],["docs/vendor/jquery/jquery.slim.min.js","a79e2167f5ab76ca6e4feeafb31fcc04"],["docs/vendor/jquery/jquery.slim.min.map","375e0272b0153d6871979c5ac2465321"],["favicon.ico","19dac23d0ae52029b0c09d27b90decc8"],["img/01.jpg","5b4fd7558513f413aa273a9418752d99"],["img/02.jpg","e35cb05f3e7f4716e213436a6bf9b538"],["img/03.jpg","ccb005a89c3e1da4ff0cecc9f5b1954d"],["img/Thumbs.db","08b499dd653abddc47e9484fcfc96367"],["img/contact.png","469a236f572cc0cc37566f13f96a9115"],["index.html","e3652832cbe9ea447484b562cde186af"],["vendor/bootstrap/css/bootstrap-grid.css","5b8e85055bb8b4bf4ac7f4edddcf7ab7"],["vendor/bootstrap/css/bootstrap-grid.min.css","c9654d9c891fe3e57fde9cd355a916a4"],["vendor/bootstrap/css/bootstrap-reboot.css","b69603cbb0408fbad0ea399a67ef095d"],["vendor/bootstrap/css/bootstrap-reboot.min.css","38e73bab749ee7eba9bed51d6982a19e"],["vendor/bootstrap/css/bootstrap.css","82252d754417f95f7779be349acc6361"],["vendor/bootstrap/css/bootstrap.css.map","7f22dc40aa22dc514eaf73c8d619e8bd"],["vendor/bootstrap/css/bootstrap.min.css","a7022c6fa83d91db67738d6e3cd3252d"],["vendor/bootstrap/css/bootstrap.min.css.map","ea6c3c97d126f9996d7cc206f2df625b"],["vendor/bootstrap/js/bootstrap.bundle.js","ee08eb7f44335a3cf385e03d4406e4a5"],["vendor/bootstrap/js/bootstrap.bundle.js.map","1d446b0e668ececab31cd3cb5e137d4a"],["vendor/bootstrap/js/bootstrap.bundle.min.js","d70c474886678aebe3e9d91965dc8b62"],["vendor/bootstrap/js/bootstrap.bundle.min.js.map","c41626cedb5efebbfb7b18e140042613"],["vendor/bootstrap/js/bootstrap.js","c2cdb900858c3e63ce8cd9f69171d342"],["vendor/bootstrap/js/bootstrap.js.map","1659c6f13c0a9611a9ae186d99184f18"],["vendor/bootstrap/js/bootstrap.min.js","eb5fac582a82f296aeb74900b01a2fa3"],["vendor/bootstrap/js/bootstrap.min.js.map","97aa185a0946b2aae827ac35ea0bcabb"],["vendor/jquery/jquery.js","6a07da9fae934baf3f749e876bbfdd96"],["vendor/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["vendor/jquery/jquery.min.map","bae3c738b74dd89a555b7a54e4891608"],["vendor/jquery/jquery.slim.js","450d478c0491cf0b2d365997faff70dd"],["vendor/jquery/jquery.slim.min.js","99b0a83cf1b0b1e2cb16041520e87641"],["vendor/jquery/jquery.slim.min.map","375e0272b0153d6871979c5ac2465321"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







