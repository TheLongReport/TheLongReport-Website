<script lang="ts">
  export let data;


  let searchQuery = '';

  $: filteredPosts = data.posts.filter(post =>
    (post.title + post.description + post.date)
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );
</script>

<section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <h1 class="text-4xl font-extrabold text-center mb-10 text-gray-900 dark:text-black">
    Latest Long Reports
  </h1>

  <!-- 🔍 Search Bar -->
  <div class="max-w-xl mx-auto mb-12">
    <input
      type="text"
      placeholder="Search articles..."
      bind:value={searchQuery}
      class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <!-- 🔁 Filtered Posts -->
  <div class="space-y-12">
    {#each filteredPosts as post}
      <article class="rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-shadow max-w-3xl mx-auto bg-white">
        <a href={`/blog/${post.slug}`}>
          {#if post.featuredImage}
            <img
              src={post.featuredImage}
              alt={`Featured image for ${post.title}`}
              class="w-full h-64 object-cover"
              loading="lazy"
            />
          {/if}
        </a>

        <div class="p-6">
          <h2 class="text-2xl font-semibold text-gray-900 mb-2 hover:text-blue-700 transition-colors">
            <a href={`/blog/${post.slug}`} class="hover:underline">
              {post.title}
            </a>
          </h2>
          <p class="text-sm text-gray-500 mb-3">{post.date}</p>
          <p class="text-base text-gray-700 mb-4">
            {post.description}
          </p>
          <a
            href={`/blog/${post.slug}`}
            class="inline-block text-blue-600 font-semibold hover:underline"
          >
            Read more →
          </a>
        </div>
      </article>
    {/each}

    {#if filteredPosts.length === 0}
      <p class="text-center text-gray-500 text-lg mt-12">No posts found.</p>
    {/if}
  </div>
</section>