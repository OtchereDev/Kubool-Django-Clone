<template>
  <form class="">

        <h2 class="text-center  font-bold text-gray-50 text-5xl tracking-wide">
            Login
        </h2>
        <p class="text-gray-300 text-xs text-cente my-6 text-justify">
            Recieve anonymous compliments from your friends and send anonymous messages to your friends for free
        </p>
        <div>
            <label for="username" class="block text-gray-200 text-sm my-2">Your Username</label>
            <input type="text" id="username" placeholder="Enter your username" autocomplete='off' class="block w-full bg-transparent py-3 px-2 placeholder-gray-400 outline-none border-b-2 font-medium text-gray-100 text-lg border-gray-50 tracking-wide focus:border-gray-400 transition-colors duration-500" required>
        </div>
        <div class="my-6">
            <label for="password" class="block text-gray-200 text-sm my-2">Your Password</label>
            <input type="password" id="password" placeholder="Enter your password" autocomplete='off' class="block w-full bg-transparent py-3 px-2 placeholder-gray-400 outline-none border-b-2 font-medium text-gray-100 text-lg border-gray-50 tracking-wide focus:border-gray-400 transition-colors duration-500" required>
        </div>
        <div class="text-center my-10">
            <button class="flex w-full rounded-3xl py-4 text-center justify-center items-center bg-custome_bg text-gray-100 text-lg focus:outline-none">
                <span class="mr-2 font-medium">Log in</span><ion-icon class="text-2xl font-medium" name="log-in-outline"></ion-icon>
            </button>
        </div>
      </form>
</template>

<script>
export default {

}
</script>

<style>

</style>