<template>
    <div class="d-flex flex-column justify-content-center pt-4" style="width:80%;margin:auto">
        <div class="d-flex flex-row justify-content-between">
            <p style="fontSize:24px;fontWeight:400">Рейтинг пользователей</p>
            <span class="d-flex flex-row justify-content-center align-items-center sortIcon" style="width:34px;height:34px;border:.5px solid black;border-radius:8px" @click="sortUsers()">
                <img src="./icons/sort.png" alt="sort" style="width:18px;height:12px">
            </span>
        </div>
        <div v-if="!isLoading">
            <div class="usersList" :style="{filter:userSelected ? 'blur(10px)' : 'none'}">
                <b-list-group v-for="(user,index) in users" :key="index">
                    <b-list-group-item class="d-flex flex-row justify-content-start p-0 usersList__item" @click="userSelect(user,index)">
                        <span>
                            <img :src='user.avatar' alt="avatar" style="width: 60px;height: 60px;border-radius:50%" :style="{border:user.border ? '4px solid' + user.border : 'none'}">
                        </span>
                        <div style="margin-left:24px">
                            <p>Пользователь:</p>
                            {{user.name}}
                        </div>
                        <figure class="d-flex flex-row justify-contnt-between align-items-center" style="margin-left:auto">
                            <img src="./icons/star.png" alt="star" class="mr-2">
                            <figcaption>{{user.rating}}</figcaption>
                        </figure>
                    </b-list-group-item>
                </b-list-group>
            </div>
            <UserCard v-if="userSelected" :userSelected.sync="userSelected" />
        </div>
        <b-spinner v-else type="grow" size="100" style="position:relative;top:0;left:0;margin:auto;" label="Spinning"></b-spinner>
    </div>
</template>
<script>
import UserCard from './UserCard';
export default {
    name: 'App',
    components: {
        UserCard,
    },
    data() {
        return {
            isLoading: false,
            usersList: null,
            userSelected: null,
        }
    },
    methods: {
        async getData() {
            let ctx = this;
            let sortList = null;
            this.isLoading = true;
            await this.getUsers()
                .then((response) => {
                    console.log(response);
                    sortList = response.sort((a, b) => {
                        return a.rating < b.rating ? 1 : -1;
                    });
                    sortList[0].border = '#FDD835';
                    sortList[1].border = '#90A4AE';
                    sortList[2].border = '#795548';
                    sortList.forEach((user, index) => {
                        user.position = index + 1;
                    });
                    ctx.usersList = sortList;
                })
                .catch((error) => {
                    console.log(error)
                })
                .finally(() => {
                    ctx.isLoading = false;
                });
        },
        sortUsers() {
            this.usersList.reverse();
        },
        userSelect(user) {
        	if (this.userSelected) {
        		return;
        	}
            this.userSelected = user;

        },
    },
    computed: {
        users() {
            return this.usersList;
        },
        loadingStatus() {
            return this.$store.state.isLoading;
        },
    },
    created() {
        this.getData();
    },
}
</script>
<style lang="scss">
@font-face {
    font-family: "Avenir Roman";
    src: local("Avenir Roman"),
        url(./fonts/Avenir_Roman.otf) format("opentype");
}

#app {
    font-family: 'Avenir Roman', sans-serif;
}

p {
    margin: 0;
    padding: 0;
}

.sortIcon:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.07);
}

.usersList__item {
    border-radius: 10px;
    cursor: pointer;
    padding: 14px !important;
    border: none;
    margin-top: 22px;

    &:hover {
        background: rgba(0, 0, 0, 0.07);
    }
}
</style>