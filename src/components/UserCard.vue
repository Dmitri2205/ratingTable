<template>
    <div class="userCard">
        <div class="d-flex flex-row justify-content-between align-items-center userCard__header">
            <p style="font-size:24px;font-weight:400">Профиль пользователя:</p>
            <span class="closeCross">
                <img src="./icons/cross.png" alt="close" style="width:15px;height:15px" @click="closeCard()">
            </span>
        </div>
        <div class="userCard__content">
            <div class="d-flex flex-row justify-content-start p-0 userCard__content-middle">
                <span>
                    <img :src='this.$props.userSelected.avatar' alt="avatar" style="width:129px;height:129px;border-radius:50%" :style="{border:this.$props.userSelected.border ? '4px solid' + this.$props.userSelected.border : 'none'}">
                </span>
                <div style="margin-left:24px">
                    <p>Имя:</p>
                    {{this.$props.userSelected.name}}
                    <p>Баллы:</p>
                    {{this.$props.userSelected.rating}}
                    <p>Позиция в рейтинге:</p>
                    {{this.$props.userSelected.position}}
                </div>
            </div>
            <p style="margin-top:17px;">О себе:</p>
            <p style="margin-bottom:21px;font-weight:normal" :style="{fontSize:(this.$props.userSelected.description ? '' : '10px'),color:(this.$props.userSelected.description ? 'black' : 'lightgrey')}">{{this.$props.userSelected.description ? this.$props.userSelected.description : 'Пользователь не указал информацию о себе' }}</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
</style>
<script>
export default {
    name: 'UserCard',
    data() {
        return {
            scale: false,
        }
    },
    props: {
        userSelected: {
            type: Object,
            default: () => {},
        },
    },
    methods: {
        closeCard() {
            this.$emit('update:userSelected', null);
        }
    },
}
</script>
<style lang='scss' scoped>
.userCard {
    display: block;
    max-width: 478px;
    height: auto;
    background-color: white;
    padding: 26px 29px 0 29px;
    position: fixed;
    top: 35%;
    left: 0;
    right: 0;
    margin: auto;
    filter: drop-shadow(0px 0px 8px black);
    animation: apear .5s ease;

    .closeCross {
        display: inline-flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        padding: 4px;
        border-radius: 50%;
        text-align: center;

        img {
            display: inline-block;

        }

        &:hover {
            background: rgba(0, 0, 0, 0.07);
        }
    }

    @keyframes apear {
        from {
            opacity: 0
        }

        to {
            opacity: 1
        }
    }

    &__header {}

    &__content-middle {
        margin-top: 18px;
        padding: 0 29px;
    }

    p {
        font-weight: 500;
        margin: 0;
        line-height: 18px;
    }
}
</style>