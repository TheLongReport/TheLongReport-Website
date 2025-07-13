<script lang="ts">
  export let data;
</script>

<h1 class="text-3xl font-bold mb-6">Blog</h1>

{#each data.posts as post}
  <div class="mb-4">
    <a href={`/blog/${post.slug}`} class="text-xl font-semibold text-blue-600 hover:underline">{post.title}</a>
    <p class="text-sm text-gray-500">{post.date}</p>
    <p>{post.excerpt}</p>
  </div>
{/each}