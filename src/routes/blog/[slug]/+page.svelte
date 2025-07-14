<script lang="ts">
	export let data;
</script>

{#if data.post?.html}
  <article class="prose mx-auto">
    {@html data.post.html}
  </article>
{:else}
  <p class="text-red-600">⚠️ Error: Post content missing or failed to load.</p>
  <pre>{JSON.stringify(data, null, 2)}</pre>
{/if}