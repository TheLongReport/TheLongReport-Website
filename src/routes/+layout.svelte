<script lang="ts">
  import '../app.css';
</script>


<header style="background-color: red; color: white;>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
    <h1 class="text-xl font-bold text-white">The Long Report</h1>
    <h1 style="color: white; font-weight: bold;">The Long Report</h1>
    <nav class="space-x-4 text-white font-medium">
      <a href="/" class="hover:text-blue-300">Home</a>
      <a style="color: white;" href="/">Home</a>
      <a href="/michigan" class="hover:text-blue-300">Michigan</a>
      <a href="/national" class="hover:text-blue-300">National</a>
    </nav>
  </div>
</header>

<main class="max-w-4xl mx-auto px-4 py-8">
  <slot />
</main>

<footer class="bg-gray-100 mt-12 py-6 text-center text-sm text-gray-600 border-t">
  © {new Date().getFullYear()} The Long Report. All rights reserved.
</footer>