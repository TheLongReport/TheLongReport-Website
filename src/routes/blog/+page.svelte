<script lang="ts">
  export let data;
</script>

<h1 class="text-3xl font-bold mb-6">Blog</h1>

{#if data.posts}
  <ul class="space-y-4">
    {#each data.posts as post}
      <li>
        <a href={`/blog/${post.slug}`} class="text-xl font-semibold text-blue-600 hover:underline">
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
