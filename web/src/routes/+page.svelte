<script>
  import Navbar from '$lib/elements/Navbar.svelte';
  import Tryit from '$lib/elements/Tryit.svelte';

  let toggle = false;
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
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-6 mr-52"
      >
        Run script
      </button>
    </div>
    <!-- response -->
    <div>
      <div class="text-center mt-20 mr-40 mb-4 text-3xl">When to use</div>
      <div class="text-center ml-[470px]">
        ApiPlace is a free online REST API that you can use whenever you need some fake data. It can
        be in a README on <br /> GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow,
        ...or simply to test things locally.
      </div>
    </div>dasd
    <div>
      <div class="text-center mt-20 mr-60 mb-4 text-3xl">Resources</div>
      <div class="mt-6 text-center ml-10">JSONPlaceholder comes with a set of 6 common resources: </div>
      <div class="text-blue-500 ">/Posts</div>
    </div>
  </div>
</div>
