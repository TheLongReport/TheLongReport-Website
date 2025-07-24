<script lang="ts">
  export let data;

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
</script>

<article class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<h1 class="text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-black mb-2">
		{data.title}
	</h1>
	<p class="text-center text-sm text-gray-500 dark:text-gray-400 mb-4">
		{data.date} &bull; Written by {data.author}
	</p>

  <!-- Share icons (top) -->
  <div class="flex justify-center space-x-4 mb-10">
	<a
	  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(data.title)}`}
	  target="_blank"
	  class="text-blue-500 hover:text-blue-700"
	  aria-label="Share on Twitter"
	>
	  <i class="fab fa-twitter fa-lg"></i>
	</a>
	<a
	  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
	  target="_blank"
	  class="text-blue-700 hover:text-blue-900"
	  aria-label="Share on Facebook"
	>
	  <i class="fab fa-facebook fa-lg"></i>
	</a>
	<a
	  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(data.title)}`}
	  target="_blank"
	  class="text-blue-600 hover:text-blue-800"
	  aria-label="Share on LinkedIn"
	>
	  <i class="fab fa-linkedin fa-lg"></i>
	</a>
  </div>

  <!-- Main content -->
	<div class="prose lg:prose-xl dark:prose-invert mx-auto">
		{@html data.content}
	</div>

  <!-- Share icons (bottom) -->
  <div class="flex justify-center space-x-4 mt-12">
	<a
	  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(data.title)}`}
	  target="_blank"
	  class="text-blue-500 hover:text-blue-700"
	  aria-label="Share on Twitter"
	>
	  <i class="fab fa-twitter fa-lg"></i>
	</a>
	<a
	  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
	  target="_blank"
	  class="text-blue-700 hover:text-blue-900"
	  aria-label="Share on Facebook"
	>
	  <i class="fab fa-facebook fa-lg"></i>
	</a>
	<a
	  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(data.title)}`}
	  target="_blank"
	  class="text-blue-600 hover:text-blue-800"
	  aria-label="Share on LinkedIn"
	>
	  <i class="fab fa-linkedin fa-lg"></i>
	</a>
  </div>
</article>
