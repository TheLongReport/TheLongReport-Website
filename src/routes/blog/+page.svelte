<script lang="ts">
	export let data;
</script>

<section class="prose mx-auto px-4">
	<h1 class="text-3xl font-bold mb-6">Blog</h1>

	{#if data.posts.length > 0}
		<ul>
			{#each data.posts as post}
				<li class="mb-4">
					<a href={`/blog/${post.slug}`} class="text-blue-600 hover:underline">
						<h2 class="text-xl font-semibold">{post.title}</h2>
					</a>
					<p class="text-sm text-gray-500">{post.date}</p>
					<p>{post.description}</p>
				</li>
			{/each}
		</ul>
	{:else}
		<p>No blog posts found.</p>
	{/if}
</section>