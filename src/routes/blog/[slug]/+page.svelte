<script lang="ts">
  export let data;
  let shareUrl = '';
  if (typeof window !== 'undefined') {
    shareUrl = window.location.href;
  }

  const featuredImage = data.featuredImage ?? null;
  const author = data.author ?? 'The Long Report';
</script>

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
</article>