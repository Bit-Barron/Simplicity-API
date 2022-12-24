<div>
  <h1 class="flex justify-center text-3xl mt-10 mr-64">Try it</h1>
  <div class="text-center ml-9 mt-3">Run this code here, in a console or from any site:</div>
  <div class="bg-[#222526] p-6 rounded-lg w-96 ml-[1120px] mt-4">
    <div>
      <span class="text-orange-700">fetch</span><span class="text-green-400"
        >('http://localhost:3000/users/1')</span
      >
      <div class="ml-20">
        .<span class="text-orange-700">then</span>(response => response<span class="text-orange-700"
          >.json</span
        >)
      </div>
      <div class="ml-20">
        .<span class="text-orange-700">then</span>(json => console<span class="text-orange-700"
          >.log</span
        > (json) )
      </div>
    </div>
  </div>
</div>
