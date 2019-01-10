/**
  * 我们不需要在任何地方导入此文件。它由TypeScript自动包含，它告诉它以.vue结尾的任何导入都具有与Vue构造函数本身相同的形状。
**/
declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}