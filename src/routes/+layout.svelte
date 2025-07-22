<script lang="ts">
  import '../app.css';
  let menuOpen = false;
</script>

<header class="bg-red-500 shadow-md sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
    <h1 class="text-xl font-bold text-white">The Long Report</h1>

    <!-- Mobile menu button -->
    <button class="sm:hidden text-white focus:outline-none" on:click={() => (menuOpen = !menuOpen)}>
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
           viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>

    <!-- Desktop nav -->
    <nav class="hidden sm:flex space-x-4 text-white font-medium">
      <a href="/" class="hover:text-blue-300">Home</a>
      <a href="/michigan" class="hover:text-blue-300">Michigan</a>
      <a href="/national" class="hover:text-blue-300">National</a>
    </nav>
  </div>

  <!-- Mobile nav -->
  {#if menuOpen}
    <nav class="sm:hidden px-4 pb-4 space-y-2 text-white font-medium">
      <a href="/" class="block hover:text-blue-300">Home</a>
      <a href="/michigan" class="block hover:text-blue-300">Michigan</a>
      <a href="/national" class="block hover:text-blue-300">National</a>
    </nav>
  {/if}
</header>

<main class="max-w-4xl mx-auto px-4 py-8">
  <slot />
</main>

<footer class="bg-gray-100 mt-12 py-6 text-center text-sm text-gray-600 border-t">
  © {new Date().getFullYear()} The Long Report. All rights reserved.
</footer>