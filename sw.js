const staticCacheName = "static-cache-v1"
const dynamicCacheName = "dynamic-cache-v1"

const ASSETS = [
  "/",
  "/manifest.json",
  "/index.html",
  "/src/main.jsx",
  "/src/app/App.jsx",
  "/src/app/index.js",
  "/src/shared/images/logo.png",
  "/src/pages/index.jsx",
  "/src/pages/home.jsx",
]

self.addEventListener("install", async (event) => {
  const cache = await caches.open(staticCacheName)
  await cache.addAll(ASSETS)
})

self.addEventListener("activate", async (event) => {
  const cacheKeys = await caches.keys()
  await Promise.all(
    cacheKeys
      .filter((key) => ![staticCacheName, dynamicCacheName].includes(key))
      .map((key) => caches.delete(key))
  )
})

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request))
})

async function cacheFirst(request) {
  const cached = await caches.match(request)

  try {
    return cached ?? await fetch(request).then((response) => {
      return networkFirst(request)
    })
  } catch (e) {
    return networkFirst(request)
  }
}

async function networkFirst(request) {
  const cache = await caches.open(dynamicCacheName)

  try {
    const response = await fetch(request)
    await cache.put(request, response.clone())
    return response
  } catch (e) {
    const cached = await cache.match(request)
    return cached
  }
}
