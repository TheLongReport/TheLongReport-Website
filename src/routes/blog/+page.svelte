<script>
  export let data;
</script>

<h1 class="text-4xl font-bold mb-6">Blog Posts</h1>
<ul class="space-y-4">
  {#each data.posts as post}
    <li>
      <a href={`/blog/${post.slug}`} class="text-blue-600 hover:underline text-xl font-semibold">
        {post.title}
      </a>
      <p class="text-sm text-gray-500">{post.date}</p>
    </li>
  {/each}
</ul>
