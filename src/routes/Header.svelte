<script>
	import { page } from '$app/stores';
	import logo_TTT from '$lib/images/logo_TTT.png';
</script>

<header>
	<nav class="relative flex justify-between items-center bg-background p-mobile sm:p-desktop py-0 sm:py-0 border-b-2 border-interaction">
		<a href="/" class="block my-4">
			<img src={logo_TTT} alt="Logo Loris Planté" class="w-16 h-16"/>
		</a>
		<h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-interaction">
			<span class="text-4xl font-bold text-primary">Tic-Tac-Toe</span>Loris Planté
		</h1>
	</nav>
</header> 


