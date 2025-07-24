<script lang="ts">
  export let data;
</script>

<h1 class="text-3xl font-bold mb-6">Blog</h1>

{#if data.posts?.length}
  <ul class="space-y-6">
    {#each data.posts as post}
      <li class="p-4 border rounded-md shadow-sm hover:shadow transition">
        <a href={`/blog/${post.slug}`} class="text-2xl font-semibold text-blue-700 hover:underline">
          {post.title}
        </a>
        <p class="text-sm text-gray-500">{post.date}</p>
        <p class="text-gray-700">{post.description}</p>
      </li>
    {/each}
  </ul>
{:else}
  <p>No blog posts found.</p>
{/if}
