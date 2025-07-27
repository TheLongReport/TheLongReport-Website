<script lang="ts">
	
  import { afterNavigate } from '$app/navigation';
  export let data;

  let shareUrl = '';
  if (typeof window !== 'undefined') {
    shareUrl = window.location.href;
  }

  let featuredImage: string | null = null;
  let author: string = 'The Long Report';

  // Reactively update on data change
  $: featuredImage = data.featuredImage ?? null;
  $: author = data.author ?? 'The Long Report';

  // Scroll to top on navigation
  afterNavigate(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
</script>

<svelte:head>
	<title>{data.ogTitle || data.title}</title>
	<meta name="description" content={data.ogDescription || data.description} />
	{#if data.keywords}
	<meta name="keywords" content={data.keywords.join(', ')} />
	{/if}
	<!-- Open Graph -->
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.ogTitle ?? data.title} />
	<meta property="og:description" content={data.ogDescription ?? data.description} />
	<meta property="og:image" content={`https://thelongreport.net${data.ogImage ?? data.featuredImage}`} />
	<meta property="og:url" content={`https://thelongreport.net/blog/${data.slug}`} />

	<!-- Twitter Card -->
	<meta name="twitter:card" content={data.twitterCard ?? 'summary_large_image'} />
	<meta name="twitter:title" content={data.ogTitle ?? data.title} />
	<meta name="twitter:description" content={data.ogDescription ?? data.description} />
	<meta name="twitter:image" content={`https://thelongreport.net${data.ogImage ?? data.featuredImage}`} />
</svelte:head>

<article class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  {#if featuredImage}
    <img
      src={featuredImage}
      alt={`Featured image for ${data.title}`}
      class="rounded-xl shadow-md mb-8 w-full object-cover max-h-[500px] mx-auto"
      loading="lazy"
    />
  {/if}

  <h1 class="text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-black mb-2">
    {data.title}
  </h1>

  <p class="text-center text-sm text-gray-500 dark:text-gray-400 mb-10">
    {data.date} &bull; Written by {author}
  </p>

  <!-- Share Icons (Top) -->
  <div class="flex justify-center gap-6 mb-12 text-gray-600">
    <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(data.title)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
      <i class="fab fa-twitter fa-xl"></i>
    </a>
    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
      <i class="fab fa-facebook fa-xl"></i>
    </a>
    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(data.title)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
      <i class="fab fa-linkedin fa-xl"></i>
    </a>
  </div>

  <!-- Post Content -->
  <div class="prose prose-lg dark:prose-invert mx-auto text-justify">
    {@html data.content}
  </div>

  <!-- Share Icons (Bottom) -->
  <div class="flex justify-center gap-6 mt-16 text-gray-600">
    <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(data.title)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
      <i class="fab fa-twitter fa-xl"></i>
    </a>
    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
      <i class="fab fa-facebook fa-xl"></i>
    </a>
    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(data.title)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
      <i class="fab fa-linkedin fa-xl"></i>
    </a>
  </div>

	<!-- Navigation: Previous / Next -->
	<div class="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-4">
	{#if data.previous}
		<a href={`/blog/${data.previous.slug}`} class="block border border-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition-shadow bg-white">
		<p class="text-xs text-gray-500 mb-1">Previous Article</p>
		<p class="text-base font-semibold text-blue-700 hover:underline">
			← {data.previous.title}
		</p>
		</a>
	{/if}

	{#if data.next}
		<a href={`/blog/${data.next.slug}`} class="block border border-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition-shadow bg-white text-right">
		<p class="text-xs text-gray-500 mb-1">Next Article</p>
		<p class="text-base font-semibold text-blue-700 hover:underline">
			{data.next.title} →
		</p>
		</a>
	{/if}
	</div>
</article>