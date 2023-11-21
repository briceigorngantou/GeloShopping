<template>
	<main class="home bg-gradient-to-b from-stone-700 to-black" style=" width: auto; overflow: hidden; height: 100vh;">
		<div class="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100 " style="margin-top: 10%; margin-left: 35%;">
			<h2 class="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
			<p class="text-sm text-center dark:text-gray-400">Dont have account?
				<RouterLink :to="{name:'SignUp'}"><a href="#" rel="noopener noreferrer" class="focus:underline hover:underline">Sign up here</a></RouterLink>
			</p>
			<div class="flex items-center w-full my-4">
				<hr class="w-full dark:text-gray-400">
				<p class="px-3 dark:text-gray-400">OR</p>
				<hr class="w-full dark:text-gray-400">
			</div>
			<form  action="" class="space-y-8 ng-untouched ng-pristine ng-valid">
				<div class="space-y-4">
					<div class="space-y-2">
						<label for="email" class="block text-sm float-left" >Email address</label>
						<input type="email" name="email" id="email" placeholder="samjelaangelo@gmail.com" class="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" v-model="register.email">
					</div>
					
					<div class="space-y-2">
						<div class="flex justify-between">
							<label for="password" class="text-sm">Password</label>
							<a rel="noopener noreferrer" href="#" class="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
						</div>
					</div>
						<input type="password" name="password" id="password" placeholder="*********" class="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" v-model="register.password">
					
				</div>
				<br>
				<button type="button" class="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900" @click="loginUser">Sign in</button>
			</form>
		</div>
	</main>
</template>

<script>
import axios from 'axios';
export default{
	components:{

	},
	data(){
		return{
			register:{
				email:"",
				password: "",
			},
		};
	},
	methods: {
		async loginUser(){
			const userData = {
				password: this.register.password,
				email: this.register.email,
			} 
			console.log(userData);
			await axios.post('api/login',{...userData});
			setTimeout(()=>{
				this.$router.push('/shop')
				}, 1500);
		},

	}
}
</script>