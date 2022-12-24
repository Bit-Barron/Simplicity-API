<script lang="ts">
  import Router from 'svelte-spa-router';
  import Guide from '../../routes/Guide.svelte';

  let routes = {
    '/': Guide
  }
</script>

<div class="bg-[#181a1b]">
  <div class="container mx-auto p-7">
    <div class="flex">
      <div class="text-blue-700 font-bold ml-60">Rest API</div>
      <Router {routes}/>
    </div>
  </div>
</div>
