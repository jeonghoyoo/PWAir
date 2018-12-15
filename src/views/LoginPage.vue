<template> 
    <form>
         <section class="section-intro">
            <h1>PWAir</h1>
            <h2>Open the window when we push you</h2>
            <div class="main-icon-container">
            <span class="icon-laughing-face"></span>
            <span class="icon-face-open-mouth-eyebrows"></span>
            <span class="icon-angry-face-teeth"></span>
            </div>
        </section>
        <section class="section-login-input">
            <input type="text"  v-model="email" placeholder="Email"/>
            <input type="password" v-model="password" placeholder="Password"/>
            <button class="btn-default btn-full" @click.prevent="clickLoginBtn">Login</button>
        </section>
        <section class="section-social-login">
            <button class="btn-google md-raised md-primary">Google</button>
            <button class="btn-facebook md-raised md-primary">Facebook</button>
        </section>
    </form>
</template>

<script>
import router from '../router/index.js'

export default {
    data(){
        return{
            email : '',
            password : ''
        }
    },
    methods : {
        clickLoginBtn(){
            if(this.email && this.password){
                console.log("email value : " , this.email);
                console.log("password value : " , this.password);
                var self = this;
                
                return firebase.auth().signInWithEmailAndPassword("jeonghoyoo85@gmail.com", "11111111").catch(function(error) {
                    if (error.code === 'auth/wrong-password') {
                        alert('Wrong password.');
                    } else {
                        alert(error.message);
                    }
                    console.log(error);
                }).then(function (user) {
                    console.log(user, "has been logged");
                    router.push("/main");
                });
                
            }else{
                alert('사용자 아이디 & 패스워드를 확인하세요.');
            }

            return false;
        }
    }
}
</script>

<style>
.section-intro {
  text-align: center;
  padding: 7rem 0 1rem;
}
.section-intro h1 {
  color: white;
  margin: 0 0 1rem;
  font-size: 4rem;
  font-weight: bold;
}
.section-intro h2 {
  font-weight: 100;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 1.6rem;
}
.main-icon-container {
  font-size: 3.2rem;
  color: white;
}

section-login-input {
  padding: 1.5rem;
  padding: 1.5rem;
  margin: 0 2rem 1rem;
  background: white;
  padding: 1rem 1.5rem 1.5rem;
}
.md-input-container {
  margin: 0px 0 24px;
}
.btn-default {
  background: #ffe340;
}
.btn-full {
  width: 100%;
  margin: 0;
}
.section-social-login {
  text-align: center;
}
</style>
