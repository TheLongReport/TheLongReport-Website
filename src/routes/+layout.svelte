<style global>
  @import '../app.css';
</style>

<script lang="ts">
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<main class="min-h-screen max-w-6xl mx-auto px-4 py-8">
  <slot />
</main>

<Footer />