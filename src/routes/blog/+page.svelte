<script>
  export let data;
</script>

<h1 class="text-3xl font-bold mb-6">Blog</h1>

{#each data.posts as post}
  <div class="mb-6 border-b pb-4">
    <h2 class="text-2xl font-semibold">
      <a class="text-blue-600 hover:underline" href={`/blog/${post.slug}`}>
        {post.title}
      </a>
    </h2>
    <p class="text-gray-500 text-sm mb-1">
      {new Date(post.date).toLocaleDateString()}
    </p>
    <p>{post.excerpt}</p>
  </div>
{/each}