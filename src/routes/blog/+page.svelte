<script lang="ts">
  export let data;
</script>

<section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h1 class="text-4xl font-extrabold text-center mb-12">Latest Articles</h1>

  <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {#each data.posts as post}
      <a href={`/blog/${post.slug}`} class="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition border border-gray-200">
        <h2 class="text-xl font-bold mb-1 text-gray-900">{post.title}</h2>
        <p class="text-sm text-gray-500 mb-2">{post.date} — {post.author}</p>
        <p class="text-gray-700 text-sm line-clamp-3">{post.description || 'No description available.'}</p>
      </a>
    {/each}
  </div>
</section>