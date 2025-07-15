<script lang="ts">
  import '../app.css';
</script>

<header class="bg-red-500 shadow-md sticky top-0 z-50 h-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center text-white">
    <h1 class="text-xl font-bold">
      The Long Report
    </h1>
    <nav class="space-x-4 font-medium">
      <a href="/" class="hover:underline">Home</a>
      <a href="/michigan" class="hover:underline">Michigan</a>
      <a href="/national" class="hover:underline">National</a>
    </nav>
  </div>
</header>

<main class="max-w-4xl mx-auto px-4 py-8">
  <slot />
</main>

<footer class="bg-gray-100 mt-12 py-6 text-center text-sm text-gray-600 border-t">
  © {new Date().getFullYear()} The Long Report. All rights reserved.
</footer>