<script lang="ts">
  import '../app.css';
  let menuOpen = false;
</script>

<header class="bg-gray-100 shadow-md sticky inset-x-0 top-[1px] z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
    <a href="/" class="flex items-center">
      <img src="/images/TheLongReport_WIDE.png" alt="The Long Report" class="h-8 w-auto sm:h-10" />
    </a>
    <!-- Mobile menu button -->
    <button class="sm:hidden text-black focus:outline-none" on:click={() => (menuOpen = !menuOpen)}>
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
           viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>

    <!-- Desktop nav -->
    <nav class="hidden sm:flex space-x-4 text-black font-medium">
      <a href="/" class="hover:text-blue-300">Home</a>
      <a href="/blog" class="hover:text-blue-300">News</a>
      <a href="/Contact" class="hover:text-blue-300">Contact</a>
    </nav>
  </div>

  <!-- Mobile nav -->
  {#if menuOpen}
    <nav class="sm:hidden px-4 pb-4 space-y-2 text-black font-medium">
      <a href="/" class="block hover:text-blue-300">Home</a>
      <a href="/blog" class="block hover:text-blue-300">News</a>
      <a href="/Contact" class="block hover:text-blue-300">Contact</a>
    </nav>
  {/if}
</header>

<main class="max-w-4xl mx-auto px-4 py-8">
  <slot />
</main>

<footer class="bg-gray-100 mt-12 py-6 text-center text-sm text-gray-600 border-t">
  © {new Date().getFullYear()} The Long Report. All rights reserved.
</footer>