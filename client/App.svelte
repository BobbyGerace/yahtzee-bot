<script lang="ts">
	import Menu from './components/Menu.svelte'
	import Loading from './components/Loading.svelte'
	import Game from './components/Game.svelte'
</script>

<main>
	<div class="game-container">
		<Game />
	</div>
</main>

<style>
	.game-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>