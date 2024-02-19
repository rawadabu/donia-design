function Features() {
  return (
    <>
      <section class="py-10 bg-white sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
            <div>
              <div class="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
                <svg
                  class="text-blue-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm2 4a1 1 0 112 0v8a1 1 0 11-2 0V6zm5 0a1 1 0 112 0v8a1 1 0 11-2 0V6zm5 0a1 1 0 112 0v8a1 1 0 11-2 0V6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 class="mt-8 text-lg font-semibold text-black">Logos</h3>
              <p class="mt-4 text-sm text-gray-600">
                Crafting memorable and distinctive logos that represent your
                brand's identity and values.
              </p>
            </div>

            <div>
              <div class="flex items-center justify-center w-20 h-20 mx-auto bg-orange-100 rounded-full">
                <svg
                  class="text-orange-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M13.5 8.5l-3 3m0 0l-3-3m3 3V6"
                  />
                </svg>
              </div>
              <h3 class="mt-8 text-lg font-semibold text-black">Branding</h3>
              <p class="mt-4 text-sm text-gray-600">
                Developing strong brand identities through strategic design to
                convey your business’s personality.
              </p>
            </div>

            <div>
              <div class="flex items-center justify-center w-20 h-20 mx-auto bg-green-100 rounded-full">
                <svg
                  class="text-green-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7.707 9.293a1 1 0 00-1.414 1.414L9.586 14l4.707-4.707a1 1 0 00-1.414-1.414L10 11.586l-2.293-2.293z" />
                </svg>
              </div>
              <h3 class="mt-8 text-lg font-semibold text-black">
                Social Media Marketing
              </h3>
              <p class="mt-4 text-sm text-gray-600">
                Enhancing your brand’s presence on social media platforms to
                engage with a broader audience.
              </p>
            </div>

            <div>
              <div class="flex items-center justify-center w-20 h-20 mx-auto bg-red-100 rounded-full">
                <svg
                  class="text-red-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8 16V8a2 2 0 114 0v8a2 2 0 11-4 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M2 2a2 2 0 012-2h12a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm2 0v16h12V2H4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 class="mt-8 text-lg font-semibold text-black">
                Package Design
              </h3>
              <p class="mt-4 text-sm text-gray-600">
                Creating visually appealing packaging designs that stand out on
                the shelf and reflect your brand’s ethos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
