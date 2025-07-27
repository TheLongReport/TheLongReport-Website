<script lang="ts">
  export let data;
</script>

<section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h1 class="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-black">
    Latest Articles
  </h1>

  <div class="flex flex-col space-y-12">
    {#each data.posts as post}
      <div class="border border-gray-200 rounded-xl shadow-lg overflow-hidden max-w-3xl mx-auto">
        {#if post.featuredImage}
          <a href={`/blog/${post.slug}`}>
            <img
              src={post.featuredImage}
              alt={`Featured image for ${post.title}`}
              class="w-full h-60 object-cover"
              loading="lazy"
            />
          </a>
        {/if}

        <div class="p-6">
          <h2 class="text-2xl font-bold mb-1 text-gray-900 dark:text-black">
            <a href={`/blog/${post.slug}`} class="hover:underline">{post.title}</a>
          </h2>
          <p class="text-sm text-gray-500 mb-4">{post.date}</p>
          <p class="text-base text-gray-700 dark:text-gray-800 mb-4">
            {post.description}
          </p>
          <a href={`/blog/${post.slug}`} class="text-blue-600 hover:underline font-medium">
            Read more →
          </a>
        </div>
      </div>
    {/each}
  </div>
</section>