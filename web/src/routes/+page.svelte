<script lang="ts">
  import Navbar from '$lib/elements/Navbar.svelte';
  import Tryit from '$lib/elements/Tryit.svelte';
  import Routes from '$lib/elements/Routes.svelte';
  import Resources from '$lib/elements/Resources.svelte';

  let showclass = false;
</script>

<div>
  <Navbar />
  <div class="">
    <div class="bg-[#182e6e] p-40">
      <div class="text-6xl flex justify-center ml-32 mb-20">Json PLACEHOLDER</div>
      <div class="flex justify-center mt-5 text-2xl ml-32">
        Free fake api for testing and prototyping
      </div>
      <div class="flex justify-center mt-5 text-xl ml-32">
        Powered by Json Server + LowDB Tested with XV
      </div>
      <div class="flex justify-center mt-5 text-sm ml-32">
        As of Oct 2022, serving 1.7 billion request each month
      </div>
    </div>
    <Tryit />
    <div class="flex justify-center">
      <button
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-6 mr-[190px] "
        on:click={() => (showclass = !showclass)}
      >
        Run script
      </button>
    </div>
    <div class={showclass ? 'bg-[#222526] p-8 mr-96 rounded-lg  ml-[1120px] mt-4' : ''}>
      {showclass ? fetch('http://localhost:3000/users/1') : ''}
    </div>

    <div>
      <div class="text-center mt-20 mr-32 mb-4 text-3xl">When to use</div>
      <div class="text-center ml-[580px]">
        this Api placeholder is a free online REST API that you can use whenever you need some fake
        data. It can be in a README on <br />
        <span class="mr-20"
          >GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to
          test things locally.</span
        >
      </div>
    </div>
    <Resources />
    <Routes />
  </div>
  <div class="flex justify-center mt-10">
    Coded and maintained with ❤️ by <a
      href="https://github.com/Bit-Barron"
      class="text-blue-500 ml-2 mr-2">Bit-Barron</a
    > © 2022
  </div>
</div>
