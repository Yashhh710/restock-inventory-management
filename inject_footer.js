const fs = require('fs');
const path = require('path');

const files = [
  'products/item-a765/index.html',
  'products/item-b203/index.html',
  'products/item-f303/index.html',
  'products/item-t845/index.html'
];

const basePath = 'c:\\Users\\tamba\\Downloads\\wetransfer_screwfast-uk-3_2026-07-31_1219\\screwfast.uk 3';

const footerHtml = `
<footer class="w-full bg-neutral-300 dark:bg-neutral-900">
  <div class="mx-auto w-full max-w-[85rem] px-4 py-10 sm:px-6 lg:px-16 lg:pt-20 2xl:max-w-(--breakpoint-2xl)">
    <div class="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
      <div class="col-span-full lg:col-span-1">
        <svg class="h-auto w-32" viewBox="0 0 521 226" fill="none">
          <rect width="78.937" height="18.485" x="269" y="154.911" class="fill-current text-yellow-500 dark:text-yellow-400" fill="currentColor" rx="9.242" transform="rotate(-43.075 269 154.911)"></rect>
          <rect width="78.937" height="18.485" x="319" y="154.911" class="fill-current text-yellow-500 dark:text-yellow-400" fill="currentColor" rx="9.242" transform="rotate(-43.075 319 154.911)"></rect>
          <rect width="78.937" height="18.485" x="369.285" y="154.911" class="fill-current text-yellow-500 dark:text-yellow-400" fill="currentColor" rx="9.242" transform="rotate(-43.075 369.285 154.911)"></rect>
          <rect width="28.464" height="18.485" x="419.57" y="154.911" class="fill-current text-yellow-500 dark:text-yellow-400" fill="currentColor" rx="9.242" transform="rotate(-43.075 419.57 154.911)"></rect>
          <path class="fill-current text-yellow-500 dark:text-yellow-400" fill="currentColor" d="M499.804 128.068c7.03 2.636 6.885 12.63-.219 15.061l-18.951 6.483c-5.238 1.792-10.669-2.15-10.589-7.686l.196-13.514c.081-5.535 5.624-9.318 10.808-7.374l18.755 7.03Z"></path>
          <path class="fill-current text-neutral-700 dark:text-neutral-300" fill="currentColor" d="M141.808 83.584c.171 5.803-1.024 10.837-3.584 15.104-5.717 9.387-15.701 14.336-29.952 14.848-6.485.256-13.61-1.323-21.376-4.736l.256-19.328c1.28 1.024 2.944 2.219 4.992 3.584 3.67 2.475 7.808 3.712 12.416 3.712 12.203 0 18.304-4.352 18.304-13.056v-.256c0-4.01-2.219-7.296-6.656-9.856-2.389-1.365-6.827-2.987-13.312-4.864a137.675 137.675 0 0 1-8.32-2.816c-10.496-5.888-15.744-14.421-15.744-25.6v-.768c0-5.12 1.408-9.899 4.224-14.336 2.816-4.523 6.528-8.021 11.136-10.496 4.693-2.56 9.728-3.925 15.104-4.096 7.253-.17 14.08 1.195 20.48 4.096v18.304c-4.693-4.096-10.88-6.144-18.56-6.144-2.816 0-5.419.725-7.808 2.176-3.67 2.219-5.504 5.461-5.504 9.728 0 5.803 4.267 9.984 12.8 12.544 1.536.512 4.565 1.45 9.088 2.816 7.68 2.304 13.184 5.76 16.512 10.368 3.413 4.608 5.248 10.965 5.504 19.072Zm66.758 20.736c-6.656 6.4-14.549 9.6-23.68 9.6-9.643 0-17.792-3.285-24.448-9.856-6.571-6.656-9.856-14.805-9.856-24.448 0-9.557 3.328-17.621 9.984-24.192 6.656-6.656 14.763-9.984 24.32-9.984 8.704 0 16.299 2.944 22.784 8.832l-10.368 13.952c-3.328-3.67-7.467-5.504-12.416-5.504-4.693 0-8.704 1.664-12.032 4.992-3.328 3.243-4.992 7.21-4.992 11.904 0 4.693 1.664 8.704 4.992 12.032 3.328 3.328 7.339 4.992 12.032 4.992 5.12 0 9.344-1.963 12.672-5.888l11.008 13.568Zm42.82-41.6c-4.693 0-8.704 1.664-12.032 4.992-3.328 3.243-4.992 7.21-4.992 11.904V112h-17.28V79.616c0-9.557 3.328-17.621 9.984-24.192 6.656-6.656 14.763-9.984 24.32-9.984v17.28Zm77.051 16.896a34.47 34.47 0 0 1-.384 5.12h-50.048c1.109 3.584 3.157 6.485 6.144 8.704 2.987 2.133 6.357 3.2 10.112 3.2 5.205 0 9.515-2.005 12.928-6.016l10.496 13.952c-6.571 6.229-14.379 9.344-23.424 9.344-9.643 0-17.792-3.285-24.448-9.856-6.571-6.656-9.856-14.805-9.856-24.448 0-9.557 3.328-17.621 9.984-24.192 6.656-6.656 14.763-9.984 24.32-9.984s17.621 3.328 24.192 9.984c6.656 6.57 9.984 14.635 9.984 24.192Zm-19.328-7.808c-3.157-6.059-8.107-9.088-14.848-9.088-6.827 0-11.819 3.03-14.976 9.088h29.824Zm145.596 7.936c0 9.643-3.328 17.792-9.984 24.448-6.571 6.571-14.677 9.856-24.32 9.856-9.472 0-17.579-3.413-24.32-10.24-6.741 6.827-14.848 10.24-24.32 10.24-9.643 0-17.792-3.285-24.448-9.856-6.571-6.656-9.856-14.805-9.856-24.448V45.568h17.28v34.176c0 4.693 1.664 8.704 4.992 12.032 3.328 3.328 7.339 4.992 12.032 4.992s8.661-1.664 11.904-4.992c3.328-3.328 4.992-7.339 4.992-12.032l.128-34.176h17.28v43.008h-.128c3.328 5.461 8.149 8.192 14.464 8.192 4.693 0 8.661-1.664 11.904-4.992 3.328-3.328 4.992-7.339 4.992-12.032l.128-34.176h17.28v34.176Z"></path>
          <path class="fill-current text-neutral-700 dark:text-neutral-300" fill="currentColor" d="M56.064 163.616H26.24V212H8.832V110.624h47.232v14.848H26.24v20.096h29.824v18.048ZM147.389 212h-18.304l-3.712-9.984c-6.827 8.021-15.531 12.032-26.112 12.032-9.557 0-17.664-3.328-24.32-9.984-6.57-6.656-9.856-14.72-9.856-24.192 0-7.253 2.048-13.781 6.144-19.584 4.096-5.888 9.557-10.069 16.384-12.544 4.01-1.451 7.936-2.176 11.776-2.176 7.253 0 13.781 2.091 19.584 6.272 5.888 4.096 10.069 9.557 12.544 16.384L147.389 212Zm-31.104-32.128c0-5.973-2.432-10.624-7.296-13.952-2.816-1.963-6.059-2.944-9.728-2.944-5.973 0-10.581 2.389-13.824 7.168-2.048 2.987-3.072 6.229-3.072 9.728 0 5.888 2.432 10.496 7.296 13.824 2.987 2.048 6.187 3.072 9.6 3.072 4.693 0 8.704-1.621 12.032-4.864 3.328-3.328 4.992-7.339 4.992-12.032Zm92.015 12.544c0 4.096-1.365 7.808-4.096 11.136-5.461 6.656-13.227 9.856-23.296 9.6-4.011-.085-8.405-.981-13.184-2.688-4.693-1.707-8.533-3.84-11.52-6.4l9.6-12.416c4.608 4.352 9.515 6.528 14.72 6.528h.384c2.133 0 4.053-.384 5.76-1.152 2.219-1.024 3.328-2.475 3.328-4.352v-.512c-.256-1.963-1.579-3.371-3.968-4.224-.939-.171-2.944-.555-6.016-1.152-3.84-.768-7.083-1.707-9.728-2.816-7.765-3.328-11.648-9.173-11.648-17.536 0-8.021 3.968-14.037 11.904-18.048 3.499-1.792 7.296-2.731 11.392-2.816 4.267-.085 8.704.64 13.312 2.176 5.291 1.792 9.045 4.139 11.264 7.04l-11.52 10.368c-2.987-2.987-6.229-4.48-9.728-4.48-5.461 0-8.192 1.792-8.192 5.376v.256c0 1.707 2.219 3.157 6.656 4.352.341.085 3.157.64 8.448 1.664 10.752 2.048 16.128 8.619 16.128 19.712v.384ZM251.511 212c-9.557 0-17.664-3.285-24.32-9.856-6.656-6.656-9.984-14.763-9.984-24.32v-67.2h17.28v34.944h17.024v14.72h-17.024v17.536c0 4.693 1.664 8.704 4.992 12.032 3.328 3.243 7.339 4.864 12.032 4.864V212Z"></path>
        </svg>
      </div>
      <div class="col-span-1">
        <h3 class="font-bold text-neutral-800 dark:text-neutral-200">Documentations</h3>
        <ul class="mt-3 grid space-y-3">
          <li>
            <a href="../../welcome-to-docs/" class="inline-flex gap-x-2 rounded-lg text-neutral-600 ring-zinc-500 outline-hidden transition duration-300 hover:text-neutral-500 focus-visible:ring-3 dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-neutral-300 dark:focus:outline-hidden">Report</a>
          </li>
          <li>
            <a href="../index.html" class="inline-flex gap-x-2 rounded-lg text-neutral-600 ring-zinc-500 outline-hidden transition duration-300 hover:text-neutral-500 focus-visible:ring-3 dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-neutral-300 dark:focus:outline-hidden">PPT</a>
          </li>
        </ul>
      </div>
      <div class="col-span-1">
        <h3 class="font-bold text-neutral-800 dark:text-neutral-200">Quick Nevigetion</h3>
        <ul class="mt-3 grid space-y-3">
          <li>
            <a href="../../index.html" class="inline-flex gap-x-2 rounded-lg text-neutral-600 ring-zinc-500 outline-hidden transition duration-300 hover:text-neutral-500 focus-visible:ring-3 dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-neutral-300 dark:focus:outline-hidden">Home</a>
          </li>
          <li>
            <a href="../index.html" class="inline-flex gap-x-2 rounded-lg text-neutral-600 ring-zinc-500 outline-hidden transition duration-300 hover:text-neutral-500 focus-visible:ring-3 dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-neutral-300 dark:focus:outline-hidden">Products</a>
          </li>
          <li>
            <a href="../../services/index.html" class="inline-flex gap-x-2 rounded-lg text-neutral-600 ring-zinc-500 outline-hidden transition duration-300 hover:text-neutral-500 focus-visible:ring-3 dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-neutral-300 dark:focus:outline-hidden">Services</a>
          </li>
          <li>
            <a href="../../blog/index.html" class="inline-flex gap-x-2 rounded-lg text-neutral-600 ring-zinc-500 outline-hidden transition duration-300 hover:text-neutral-500 focus-visible:ring-3 dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-neutral-300 dark:focus:outline-hidden">Blog</a>
          </li>
          <li>
            <a href="../../contact/index.html" class="inline-flex gap-x-2 rounded-lg text-neutral-600 ring-zinc-500 outline-hidden transition duration-300 hover:text-neutral-500 focus-visible:ring-3 dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-neutral-300 dark:focus:outline-hidden">Contact</a>
          </li>
        </ul>
      </div>
      <div class="col-span-2">
        <h3 class="font-bold text-neutral-800 dark:text-neutral-200">Stay up to date</h3>
        <form data-demo-form="" data-demo-message="Thanks! (Demo only — wire an email service to collect real subscribers.)">
          <div class="mt-4 flex flex-col items-center gap-2 rounded-lg bg-neutral-200 p-2 sm:flex-row sm:gap-3 dark:bg-neutral-800">
            <div class="w-full">
              <label for="footer-input" class="sr-only">Email</label>
              <input type="email" id="footer-input" name="email" required="" autocomplete="email" class="block w-full rounded-lg border-transparent bg-neutral-100 px-4 py-3 text-sm text-neutral-600 caret-orange-400 focus:border-orange-400 focus:ring-orange-400 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-neutral-700 dark:text-gray-300 dark:placeholder:text-neutral-300" placeholder="Enter your email">
            </div>
            <button type="submit" class="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-orange-400 p-3 text-sm font-bold whitespace-nowrap text-neutral-50 ring-zinc-500 outline-hidden transition duration-300 hover:bg-orange-500 focus-visible:ring-3 disabled:pointer-events-none disabled:opacity-50 sm:w-auto dark:ring-zinc-200 dark:focus:ring-1 dark:focus:outline-hidden">Subscribe</button>
          </div>
          <p class="mt-2 hidden text-sm text-neutral-600 dark:text-neutral-400" data-demo-status="" aria-live="polite" data-success-message="Thanks! (Demo only — wire an email service to collect real subscribers.)"></p>
          <p class="mt-3 text-sm text-neutral-600 dark:text-neutral-400">Stay updated with the latest tools and exclusive deals.</p>
        </form>
      </div>
    </div>
    <div class="mt-9 grid gap-y-2 sm:mt-12 sm:flex sm:items-center sm:justify-between sm:gap-y-0">
      <div class="flex items-center justify-between">
        <p class="text-sm text-neutral-600 dark:text-neutral-400">© <span id="current-year"></span> hackerrank-orchestrate-aug26. Hacketon <a class="rounded-lg font-medium underline underline-offset-2 ring-zinc-500 outline-hidden transition duration-300 hover:text-neutral-700 hover:decoration-dashed focus:outline-hidden focus-visible:ring-3 dark:ring-zinc-200 dark:hover:text-neutral-300" href="https://yashhh710.github.io/Portfolio_v1/" target="_blank" rel="noopener noreferrer">Yash Tambade</a>.</p>
      </div>
      <div class="flex items-center gap-x-2">
        <a class="inline-flex h-10 w-10 items-center justify-center gap-x-2 rounded-lg border border-transparent text-sm font-bold text-neutral-700 outline-hidden ring-zinc-500 hover:bg-neutral-500/10 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-zinc-500 dark:ring-zinc-200 dark:hover:bg-neutral-50/10" href="https://github.com/yashtambade56-ux" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg class="h-4 w-4 shrink-0 fill-current text-neutral-700 dark:text-neutral-400" viewBox="0 0 24 24" fill="currentColor">
            <title>GitHub</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
          </svg>
        </a>
        <a class="inline-flex h-10 w-10 items-center justify-center gap-x-2 rounded-lg border border-transparent text-sm font-bold text-neutral-700 outline-hidden ring-zinc-500 hover:bg-neutral-500/10 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-zinc-500 dark:ring-zinc-200 dark:hover:bg-neutral-50/10" href="https://www.linkedin.com/in/yash-tambade-173508379" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg class="h-4 w-4 shrink-0 fill-current text-neutral-700 dark:text-neutral-400" viewBox="0 0 24 24" fill="currentColor">
            <title>LinkedIn</title>
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
          </svg>
        </a>
        <a class="inline-flex h-10 w-10 items-center justify-center gap-x-2 rounded-lg border border-transparent text-sm font-bold text-neutral-700 outline-hidden ring-zinc-500 hover:bg-neutral-500/10 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-zinc-500 dark:ring-zinc-200 dark:hover:bg-neutral-50/10" href="https://www.instagram.com/yashhh.710" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg class="h-4 w-4 shrink-0 fill-current text-neutral-700 dark:text-neutral-400" viewBox="0 0 24 24" fill="currentColor">
            <title>Instagram</title>
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
          </svg>
        </a>
      </div>
    </div>
    <script type="module">var e=(new Date).getFullYear(),t=document.getElementById("current-year");t.innerText=e.toString();</script>
  </div>
</footer>
`;

files.forEach(f => {
  const fullPath = path.join(basePath, f);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if body tag exists
    if (content.includes('</body>')) {
      content = content.replace('</body>', footerHtml + '\\n</body>');
    } else {
      // Just append it at the end
      content = content + '\\n' + footerHtml + '\\n</body>\\n</html>';
    }
    
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log('Updated ' + f);
  } else {
    console.log('File not found: ' + f);
  }
});
