<script lang="ts">
	import {
		AppLayoutWrapper,
		calculateSomething,
		calculateSomethingElse
	} from '@ousia/application-ui';
	import '../app.css';

	function testLib(): void {
		console.log(calculateSomethingElse(1, 2), calculateSomething(1, 2));
	}
</script>

<AppLayoutWrapper>
	<section class="flex justify-center items-center gap-8 pb-6">
		<button type="button" class="btn btn--xs" on:click={testLib}>Test Lib</button>
	</section>
	<slot />
</AppLayoutWrapper>
