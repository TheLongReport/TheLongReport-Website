<script lang="ts">
  export let data;
</script>

<h1 class="text-3xl font-bold mb-6">All News</h1>

{#each data.posts as post}
  <div class="mb-6">
    <a href={`/blog/${post.slug}`} class="text-xl font-semibold text-blue-700 hover:underline">
      {post.title}
    </a>
    <p class="text-sm text-gray-600">{post.date}</p>
    <p class="text-gray-700">{post.description}</p>
  </div>
{/each}