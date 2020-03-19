<template>
    <div class="sing-up">
        <div class="row">
            <form class="column" @submit.prevent="singup">
                <h1>Signup</h1>
                <div class="InputSection">
                    <div class="input-field InputField">
                        <input id="email" type="email" class="validate" v-model="email">
                        <label for="email">Email</label>
                    </div>
                    <div class="input-field InputField">
                        <input id="password" type="password" class="validate" v-model="password">
                        <label for="password">Password</label>
                    </div>
                    <a class="waves-effect waves-light btn Button">Sign up</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Signup',
    data() {
        return {
            email: null,
            password: null
        }
    },

    methods: {
        signup() {
            
        }
    }
}
</script>

<style scoped>
.column {
    width: 50%;
    border: 1px solid #ccc;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 5%;
    padding: 1rem;
    border-radius: .2rem;
    box-shadow: 1px 2px 2px #ccc;
}

.column h1 {
    text-align: center;
    color: #4527a0;
}

.InputSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 1rem;
}

.InputField {
    width: 60%;
}

.Button {
    margin-top: 5%;
}
</style>