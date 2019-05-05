<template>
    <button class="vn-button" @click="$emit('click')" :class="{[`icon-${iconPosition}`]: true, ...btnClass}">
        <vn-icon class="icon" v-if="icon && !loading" :name="icon"></vn-icon>
        <vn-icon class="loading icon" v-if="loading" name="loading"></vn-icon>
        <div class="vn-button-content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Icon from './icon'
    export default {
        name: 'VnButton',
        components: {
            'vn-icon': Icon
        },
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator (value) { // 可以给属性添加检查器，实现对属性值的控制
                    return value === 'left' || value === 'right'
                }
            },
            primary: {
                type: Boolean,
                default: false
            },
            warn: {
                type: Boolean,
                default: false
            },
            outline: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            btnClass () {
                return {
                    'vn-btn-primary': this.primary,
                    'vn-btn-warn': this.warn,
                    'vn-btn-outline': this.outline
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $button-height: 32px;
    $button-bg: #c7c8d4;
    $button-active-bg: #eee;
    $border-radius: 4px;
    $color: #1e2132;
    $border-color: #999;
    $border-color-hover: #666;
    $primary-color: #3eaf7b;
    $primary-text: white;
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    @mixin btn-active($bg, $border: null) {
        &:active {
            background: $bg;
            @if $border != null {
                border-color: $border
            }
        }
    }
    .vn-button {
        font-size: $font-size;
        color: $color;
        font-weight: 500;
        height: $button-height;
        padding: 0 1em; /* 很多人喜欢在按钮上加宽度width，其实没必要，只要左右各空出一个字符即可*/
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle; /* 遇到上下不对齐的，统一加vertical-align就可以解决，随便什么值，只要不是默认值即可 */
        &:hover {
            border-color: $border-color-hover;
        }
        &:active {
            background-color: $button-active-bg;
        }
        &:focus {
            outline: none;
        }
        &.vn-btn-primary {
            background-color: $primary-color;
            color: $primary-text;
            border-color: $primary-color;
            @include btn-active(#4abf8a)
        }
        &.vn-btn-warn {
            background-color: #ffde6c;
            color: #584801;
            border-color: #e0b509;
            @include btn-active(#fff7c7)
        }
        > .icon {
            order: 1;
            margin-right: .1em;
        }
        > .vn-button-content {
            order: 2;
        }

        &.icon-right {
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .1em;
            }

            > .vn-button-content {
                order: 1;
            }
        }
        .loading {
            animation: spin 1s infinite linear;
        }
    }
</style>
