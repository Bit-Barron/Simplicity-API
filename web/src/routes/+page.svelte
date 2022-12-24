<script lang="ts">
  import Navbar from '$lib/elements/Navbar.svelte';
  import Tryit from '$lib/elements/Tryit.svelte';
  import axios from 'axios';

  let showclass = false;
  let data = [];

  const handler = async () => {
    const response = await axios.get('http://localhost:3000/users/1');
    data = response.data;
    console.log(data);
  };
</script>

<div>
  <Navbar />
  <div class="">
    <div class="bg-[#182e6e] p-40">
      <div class="text-6xl flex justify-center mb-20">Json PLACEHOLDER</div>
      <div class="flex justify-center mt-5 text-2xl">Free fake api for testing and prototyping</div>
      <div class="flex justify-center mt-5 text-xl">
        Powered by Json Server + LowDB Tested with XV
      </div>
      <div class="flex justify-center mt-5 text-sm mr-20">
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

    <!-- response -->
    <div>
      <div class="text-center mt-20 mr-40 mb-4 text-3xl">When to use</div>
      <div class="text-center ml-[520px]">
        ApiPlaceholder is a free online REST API that you can use whenever you need some fake data.
        It can be in a README on <br /> GitHub, for a demo on CodeSandbox, in code examples on Stack
        Overflow, ...or simply to test things locally.
      </div>
    </div>
    <div>
      <div class="text-center mt-20 mr-56 mb-4 text-3xl">Resources</div>
      <div class="mt-6 text-center ml-10">
        JSONPlaceholder comes with a set of 6 common resources:
      </div>
      <div class="flex mt-10 justify-center">
        <div class="text-blue-500 mr-40 ">/Users</div>
        <div>3 Users</div>
      </div>
      <div class="flex  justify-center">
        <div class="text-blue-500 mr-40 ">/Posts</div>
        <div>10 Posts</div>
      </div>
    </div>
    <div class="flex justify-center text-2xl">Routes</div>
  </div>
</div>
