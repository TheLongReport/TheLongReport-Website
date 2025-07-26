<script lang="ts">
  export let data;
</script>

<h1 class="text-3xl font-bold text-center mb-6">Blog</h1>

{#if data.posts.length === 0}
  <p class="text-center">No blog posts found.</p>
{:else}
  <ul class="space-y-8">
    {#each data.posts as post}
      <li class="border-b pb-4">
        <a href={`/blog/${post.slug}`} class="text-2xl font-semibold hover:underline">{post.title}</a>
        <p class="text-gray-500 text-sm">{post.date}</p>
        <p class="text-gray-700 mt-2">{post.description}</p>
      </li>
    {/each}
  </ul>
{/if}