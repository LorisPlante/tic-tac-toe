
<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import '../app.css';
</script>

<div class="app">
	<Header />

	<main class="bg-background min-h-[calc(100vh-97px)] text-primary">
		<slot />
	</main>

	<Footer />
</div>


