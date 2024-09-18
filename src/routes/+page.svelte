<script lang="ts">
	import TicTacToe from './TicTacToe.svelte'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="w-full p-mobile sm:p-desktop flex flex-col justify-center items-center">
	<div class="relative flex flex-col justify-center items-center">
		<TicTacToe />
	</div>
</section>

